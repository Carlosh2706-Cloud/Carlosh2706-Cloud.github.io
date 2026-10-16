import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='footer-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='footer-info'>
                            <h3>Connect with us</h3>
                            <p>
                                4980 Campbell Creek <br/>
                                Kamloops, BC, V2C6N6 
                                <br/>
                                <br/>
                                <strong>Phone:</strong> +77856811034
                                <br/>
                                <strong>Email:</strong> info@money.com
                                <br/>
                            </p>
                            <div className='social-links mt-3'>
                                {/* <a href='#' className='twitter'>
                                    <i className='bi bi-twitter-x'></i>
                                </a> */}
                                <a href='#' className='facebook'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a href='#' className='instagram'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a href='#' className='youtube'>
                                    <i className='bi bi-youtube'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 footer-links'>
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>Home</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> {''} <a href='#'>About Us</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>Gallery</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>Our Programs</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> {''} <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-6 footer-links'>
                        <h4>Support</h4>
                        <ul>
                            <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>FAQS</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> {''} <a href='#'>Contact</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>Privacy Policy</a>
                            </li>
                             <li>
                                <i className='bx bx-chevron-right'></i> <a href='#'>Terms of Use</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-4 col-md-6 footer-newsletter'>
                        <h4>Be Part of Our Journey</h4>
                        <p>
                            Join us as we grow and nurture meaningful connections.
                        </p>
                        <form action='' method='post'>
                            <input type='email' name='email'/>
                            <input type='submit' value='Subscribe'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='copyright'>
                &copy; Copyright{''}
                <strong>
                    <span> Grounded In The Willows</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className='credits'>
                Designed by  <a href='#'>Your mom</a>
            </div>
        </div>

    </footer>
  )
}
