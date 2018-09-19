import React from 'react'
class Footer extends React.Component{
    render(){
        return <div className="footer holi">
              <div className='row space-around' style={{color: '#000000',background: '#FF7F14'}}>
                <div className="row">
                  <a className='-8p' href="https://www.facebook.com/ssninvente/"><i class="fab fa-facebook-f"></i></a>
                  <a className='-8p' href=""><i class="fab fa-instagram"></i></a>
                  <a className='-8p' href="https://twitter.com/ssn_invente"><i class="fab fa-twitter"></i></a>
                </div>
                <div className='row'>
                  <a href="https://invente2k18.freshdesk.com">support</a>
                </div>

              </div>
            {/*<div id="footer-detail">
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
            </div>*/}
        </div>
    }
}
export default Footer
