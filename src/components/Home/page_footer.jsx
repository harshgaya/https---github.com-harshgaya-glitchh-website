import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Logo.png';
import facebook from '../../assets/Home/facebook.png';
import instagram from '../../assets/Home/instagram_filled.png';
import youtube from '../../assets/Home/youtube.png';
import './page_footer.css'

function PageFooter() {
    return (
        <div className="page_footer">
            <div className="page-footer-container">




                <div className="footer_contents">
                    <div className="footer_about_glitchh">
                        <img className="footer_glitchh_logo" src={logo} alt="logo" />
                        <p>Glitchh is a one stop platform for gamers from around the world to connect, to connect interact and explore the gaming world with ease</p>
                        <div className="footer_icons">
                            <img src={instagram} alt="instagram" className='footer-social-icon' />
                            <img src={youtube} alt="youtube" className='footer-social-icon' />
                            <img src={facebook} alt="facebook" className='footer-social-icon' />

                        </div>
                    </div>

                    <div className="footer-pages-container">

                        <div className="footer_pages">
                            <h5>Comapny</h5>
                            <a href="">What we do</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Cookie Policy</a>
                            <a href="">Support</a>


                        </div>
                        <div className="footer_pages">
                            <h5>Products</h5>
                            <a href="">Glitchh</a>
                            <a href="">Product 1</a>
                            <a href="">Product 2</a>
                            <a href="">Product 3</a>
                        </div>
                        <div className="footer_pages">
                            <h5>Contact Us</h5>

                            <div className="address-glitchh">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="">glitchh@gmaing.com</a>
                            </div>
                            <div className="address-glitchh">
                                <FontAwesomeIcon icon={faMapLocationDot} />
                                <a href="">Global Gateway 8,<br></br> Rute Del la Perle, Mahe, Seychelles</a>
                            </div>
                            <div className="address-glitchh">
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="">(+62) 81211307017</a>
                            </div>





                        </div>
                    </div>
                </div>

                <div className="copyright_text_glitchh">
                    <p>&#169; Copyright Glitchh. Powered by Interactx</p>
                </div>
            </div>
        </div>
    )
}

export default PageFooter;