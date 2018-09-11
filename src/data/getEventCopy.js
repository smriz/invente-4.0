const gsheet = require('./gsheet');
const slugify = require('slugify');
const dept = require('./dept.json');
const eventlist = require('./eventlist.json');
const fs =require('fs');
const _ = require('lodash');

let sheetId = '1n9m253-B7NqbKRml4edQH8k93aUAqxgZHEMNFtJAvyw';
 const mainSheeetId = '1g8_Aj2J3jtdzkwOhPvAmNLQhmhN93pL8X7BCKzBFDxA';
sheetId = mainSheeetId;
gsheet(sheetId).then( data => {
	// console.log(data);return;
	let obj = {};
	Object.keys(dept).forEach(x => obj[x]= {});
	console.log(obj);

	data.entry.forEach( entry => {
		let fields = fieldMap(entry);
		console.log(fields);
		obj[fields.dept][fields.eventname] = clean(fields);

	});

	console.log(obj);
	write('./src/data/eventdetail.json',obj);

});


function clean(obj){
	//let cleanobj = {};
	let cleanobj = {
		last_updated:obj.timestamp,
		email:obj.email,
		isTechnical:obj.eventtype == "Technical",
    eventtype:obj.eventtype,
		dept:obj.dept,
		slug:obj.eventname,
		venue:obj.venue,
		timing:obj.timing,
		displayName:eventlist[obj.dept][obj.eventname],
		last_updated:obj.timestamp,
		description:obj.description,
		tagline:obj.taglineifany || null,
		eventname:eventlist[obj.dept][obj.eventname],
		notes:obj.notesifany,
		prize:obj.prizeamount || null,
		intenship:obj.internshipifany || null,
    registrationFee:obj.registrationfee || null,
		eventHeads:[{
				name:obj.eventhead1name,
				email:obj.eventhead1gmailssnmailid,
				contact:obj.contactnumber},
			{
				name:obj.eventhead2name,
				email:obj.eventhead2gmailssnmailid,
				contact:obj.eventhead2contactnumber
			}]

	};

	cleanobj.attachments = obj['attachmenturlifanyex-googledocsforms'].split('\n','') || [];
	cleanobj.rules = Array(5).fill(0).filter((x,i)=> obj[`round${i+1}rules`] && obj[`round${i+1}rules`].length)
		.map((x,i)=> obj[`round${i+1}rules`].split('\n').filter(x=>x!="")) || [];

	return cleanobj;

}

function write(path,obj){
	let str = JSON.stringify(obj,null,2);
	fs.writeFile(path,str,(err,dat)=>{
		console.log(err,dat);
	})
}

function fieldMap(entry){
	let arr = Object.keys(entry).filter(x => x.includes('gsx$')).map(field => ({
		[field.slice(4)]:entry[field].$t
	}));
	return Object.assign(...arr);
}

/*
 { id: [Object],
       updated: [Object],
       category: [Array],
       title: [Object],
       content: [Object],
       link: [Array],
       'gsx$timestamp': [Object],   //ok
       'gsx$emailaddress': [Object],//ok
       'gsx$dept': [Object], //ok
       'gsx$eventname': [Object], //ok
       'gsx$description': [Object],//
       'gsx$eventtype': [Object],//
       'gsx$taglineifany': [Object],//
       'gsx$round1rules': [Object],
       'gsx$round2rules': [Object],
       'gsx$round3rules': [Object],
       'gsx$round4rules': [Object],
       'gsx$round5rules': [Object],
       'gsx$venue': [Object],//
       'gsx$timing': [Object],//
       'gsx$eventhead1name': [Object],//
       'gsx$contactnumber': [Object],//
       'gsx$eventhead2name': [Object],//
       'gsx$eventhead2contactnumber': [Object],//
       'gsx$prizeamount': [Object],//
       'gsx$internshipifany': [Object],//
       'gsx$attachmenturlifanyex-googledocsforms': [Object],
       'gsx$notesifany': [Object],/
       'gsx$eventhead1gmailssnmailid': [Object],//
       'gsx$eventhead2gmailssnmailid': [Object]// }

			 */
