import React from 'react'
import FA from 'react-fontawesome';
class Footer extends React.Component{
    render(){
        return <div id="footer">
            <div id="footer-detail">
              <div id="footer-info" className="flex-row-item">
                   <div><p><h3>Invente 3.0</h3>Invente is a two-day techfest built around encouraging budding engineers to showcase their talents with unbridled enthusiasm.</p></div>
              </div>
              <div id="footer-touch" className="flex-row-item">
                  <div style={{textAlign:'center'}}><h3>Get in Touch</h3></div>
                  <div id="href-link">
                  <a href="https://www.facebook.com/ssninvente/" target="_blank"><div className="link-social"><i class="fab fa-facebook-f"></i></div></a>
                  <a href="https://twitter.com/ssn_invente" target="_blank"><div className="link-social"><i class="fab fa-twitter"></i></div></a>
                  </div>
            </div>
            </div>
        </div>
    }
}
export default Footer