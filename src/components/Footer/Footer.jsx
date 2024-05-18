import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div> <footer class="site-footer primary" id='footer'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 px-2 justify-content-center justify-content-md-start mb-2 flex-column col-md-4">
          <h2 className='' href=""><img className="logo2" src="assets/logo.png"/></h2>
         <h5 className='text-white'>PEL</h5>
         <p className='text-white'>Humanities Block III, Room 306</p>
<p className='text-white'>Department of English</p>
<p className='text-white'>Obafemi Awolowo University, Ife.</p>
<p className='text-white'>ISSN: 118-5902</p>
  
                  </div>
                  <div className=" col-sm-6 col-12 col-md-4 addpad"><h6>Quick Links</h6>
          <ul className="footer-links">
            <li><Link to="">Publications</Link></li>
            <li><Link to="">Mission</Link></li>
            <li><Link to="">General Information</Link></li>
            </ul>
          </div>


        <div className="col-sm-6 col-12 col-md-4">
          <h6>Community</h6>
          <ul className="footer-links">
            <li><a>Suggestions</a></li>
            <li><Link to="/">Home</Link></li>
            <li><a>Newsletters</a></li>
           </ul>
        </div>

        {/* <div className="col-sm-6 col-6 col-md-3">
          <h6>Partner</h6>
          <ul className="footer-links">
            <li><a href="">Our Partner</a></li>
            <li><a href="">Become a Partner</a></li>
          </ul>
        </div> */}
      </div>
      <hr className='brand-color'/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6">
          <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by Papers in English and Linguistics.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
</div>
  )
}

export default Footer
