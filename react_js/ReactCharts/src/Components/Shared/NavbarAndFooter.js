import React from 'react';
import $ from 'jquery';
import './NavbarAndFooter.css';

$('.navbar-link').click(function(){
	$(".navbar-link").removeclassName("active");
	$(this).addclassName("active");
});

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
		                    <li className="navbar-link"><a href="#/Activity">News</a></li>
		                    <li className="navbar-link active"><a href="#/Customers">Contact</a></li>
		                    <li className="navbar-link"><a href="#/Inventory">About</a></li>
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
			
			/*<script>{`
		        var prevScrollpos = window.pageYOffset;
		        window.onscroll = function() {
		          var currentScrollPos = window.pageYOffset;
		          if (prevScrollpos > currentScrollPos) {
		            document.getElementById("custom-navbar").style.top = "0";
		          } else {
		            document.getElementById("custom-navbar").style.top = "-110px";
		          }
		          prevScrollpos = currentScrollPos;
		        }
			`}</script>*/

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

export {Navbar, Footer};