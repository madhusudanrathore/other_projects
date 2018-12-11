// top-nav, side-nav, footer
import React from 'react';
import './NavbarAndFooter.css';

// side navigaiton animations
function toggle_sidenav_hide_show() {
	if(document.getElementById("openbtn").style.marginLeft === "205px"){
    	document.getElementById("mySidebar").style.display = "none";
    	document.getElementById("openbtn").style.marginLeft = "0px";
	}else{
		document.getElementById("mySidebar").style.display = "block";
    	document.getElementById("openbtn").style.marginLeft = "205px";
	}
}

class Sidenav extends React.Component{
	constructor(props) {
		super(props);
		this.state = {activeSidebarLink: 'sidenav-link1'};
		this.sidenav_link_click = this.sidenav_link_click.bind(this);
	}

	sidenav_link_click(obj){
		var a=obj.split(" ");
		// console.log(window.innerWidth, a[0], a[1]);
		console.log("new req ", a[1]);
		
		document.getElementById(this.state.activeSidebarLink).classList.remove('sidenav-active');
		this.setState(prev_state=>({
				// console.log("old ", this.state.activeSidebarLink),
				activeSidebarLink:a[1],
				// console.log("state new "+this.state.activeSidebarLink)
			})
		);
		console.log("new final ", this.state.activeSidebarLink);
		// document.getElementById(a[1]).classList.add('sidenav-active');


		if( window.innerWidth < 993 ){
			toggle_sidenav_hide_show();
		}
	}
	render(){
		return(
			<div id="sidebar-container">
				<div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" id="mySidebar">
					<a id="sidenav-link sidenav-link1" className="w3-bar-item w3-button sidenav-active" href="#main_header" onClick={e => this.sidenav_link_click(e.target.id)}>Main Header</a>
					<a id="sidenav-link sidenav-link2" className="w3-bar-item w3-button" href="#piechart" onClick={e => this.sidenav_link_click(e.target.id)}>Piechart</a>
					<a id="sidenav-link sidenav-link3" className="w3-bar-item w3-button" href="#operational_metrics" onClick={e => this.sidenav_link_click(e.target.id)}>Operational Metrics</a>
				</div>
				<button id="openbtn" onClick={toggle_sidenav_hide_show}>&#9776;</button>
			</div>
		);
	}
}

// toggle highlight sections of top navigaiton

// hiding top nav when scrool down
// show top nav when scrool up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) { // scrolling up
    document.getElementById("custom-navbar").style.top = "0";
    document.getElementById("sidebar-container").style.marginTop = "-5px";
  } else { // scrolling down
    document.getElementById("custom-navbar").style.top = "-230px";
	if(window.innerWidth <= 550){ // mobile view
		document.getElementById("sidebar-container").style.marginTop = "-100px";
  	}else{ // nonmobile view
		document.getElementById("sidebar-container").style.marginTop = "-60px";
  	}

  }
  prevScrollpos = currentScrollPos;
}
class Navbar extends React.Component{
	render(){
		return(
		    <nav id="custom-navbar" className="navbar navbar-default">

		        <div className="container-fluid">
		            
		            <div className="navbar-header">
		                <button type="button" onClick={this.myClick} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="#/Menu">
		                    <img src="https://finception.in/static/images/nav_logo.svg" alt="logo" style={{width:'180px'}} />
		                </a>
		            </div>

		            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav navbar-right">
		                	<li className="navbar-link"><a href="https://finception.in/stocks/">Stock Stories</a></li>
		                	<li className="navbar-link"><a href="https://finception.in/about/">About</a></li>
		                    <li className="navbar-link"><a href="https://finception.in/subscribe/utm_source=ipoheader">Subscribe</a></li>
		                </ul>
		            </div>

		            <form className="navbar-form navbar-search" id="navbar-search-normal">
		                <div className="form-group has-feedback">
		                    <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
		                    <i className="form-control-feedback glyphicon glyphicon-search"></i>
		                </div>
		            </form>

		        </div>

		    </nav>
		);
	}
}

class Footer extends React.Component{
	render(){
		const footerStyles={
			footer_container:{
				fontFamily:'Quicksand',
			},
			footer_row_1:{
				marginBottom:`0px`,
			},
			footer_row_2:{
				margin:`0px`,
			},
		};
		return(
			<div className="footer footer--dark" style={footerStyles.footer_container}>
				<div className="container">
					<div className="footer__inner">
						<a href="https://finception.in/" className="footer__textLogo">Finception</a>
						<div className="footer__data">
							<div className="footer__data__item">
								<div className="footer__row">Our Address</div>
								<div className="footer__row">
									<p style={footerStyles.footer_row_1}>Finception, Ideapad, CIIE</p>
									<p style={footerStyles.footer_row_2}>IIM Ahmedabad, Vastrapur 380015</p>
									<a href="mailto:support@finception.in" data-type="mail"> support@finception.in</a><br />
								</div>
							</div>
							<div className="footer__data__item">
								<div className="footer__row">
									<p>CIIE, IIM Ahmedabad</p>
								</div>
								<p> &#169; 2018 by Finception Inc.</p>
							</div>

							{/* Contact us*/}

							<div className="footer__data__item">
								<div className="footer__row">
									<strong>Contact Us</strong>
								</div>
								<div className="footer__row">
									<a href="http://fb.com/finceptionIndia" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/fb.svg" alt="facebook" /></a>
									<a href="https://twitter.com/FInception__" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/tw.svg" alt="twitter" /></a>
									<a href="https://www.linkedin.com/company/finception-in?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/li.svg" alt="linkedin" /></a>
									<a href="https://medium.com/finception" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/medium.svg" alt="medium" /></a><br />
									<a className="footer__link" href="tel:+918980594439">+91 8980594439</a> <br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export {Navbar, Sidenav, Footer};