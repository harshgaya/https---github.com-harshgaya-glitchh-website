import React from "react";
import './ContactPage.css';
import addressIcon from '../../assets/Contact/address-icon.png'
import mailIcon from '../../assets/Contact/mail-icon.png'
import phoneIcon from '../../assets/Contact/phone-icon.png'
import facebook from '../../assets/Home/facebook.png';
import instagram from '../../assets/Home/instagram_filled.png';
import youtube from '../../assets/Home/youtube.png';
import logowhite from '../../assets/Home/logowhite.png';
import contactImg from '../../assets/Home/contact-img.png';
import PageFooter from "../Home/page_footer";
import { useRef } from "react";
import Navbar from "../Navbar/Navbar";

function ContactPage() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();


    const formSubmitHandler = (event) => {

        event.preventDefault();
        console.log(event);


    }
    return (
        <React.Fragment>
            <div className="Contact">
                <Navbar />
                <div className="contact-container">
                    <h5 className='contact_subheading'>&#8212; Our Contact Details</h5>
                    <h1 className='contact-heading'>Get in touch with us</h1>
                    <p className='contact-large-text'>Maecenas vitae dolor et urna porta condimentum. Vestibulum finibus accumsan blandit. </p>
                </div>
                <div className="contact-details-box">

                    <div className="contact-box">
                        <img className='contact-box-icon' src={addressIcon} alt="address-icon" />
                        <div className="contact-all-details">
                            <h6 className="contact-details-heading">Our Address :</h6>
                            <p className='contact-details-large'>Maecenas vitae dolor et urna porta condimentum.  </p>

                        </div>




                    </div>
                    <div className="contact-box">
                        <img className='contact-box-icon' src={mailIcon} alt="address-icon" />
                        <div className="contact-all-details">
                            <h6 className="contact-details-heading">Our Mailbox :</h6>
                            <p className='contact-details-large'>Maecenas vitae dolor et urna porta condimentum.  </p>

                        </div>




                    </div>
                    <div className="contact-box">
                        <img className='contact-box-icon' src={phoneIcon} alt="address-icon" />
                        <div className="contact-all-details">
                            <h6 className="contact-details-heading">Our Mailbox :</h6>
                            <p className='contact-details-large'>Maecenas vitae dolor et urna porta condimentum.  </p>

                        </div>




                    </div>

                </div>
                <div className="contact-line"></div>
                <div className="social-icons">

                    <img className='social-single-icons' src={facebook} alt="fb-icon" />
                    <img className='social-single-icons' src={instagram} alt="fb-icon" />
                    <img className='social-single-icons' src={youtube} alt="fb-icon" />
                    <img className='social-single-icons' src={logowhite} alt="" />

                </div>
                <div className="contact-form">

                    <div className="contact-form-container">
                        <h5 className='contact_subheading'>&#8212;  Ready to Get Started</h5>
                        <h1 className='contact-form-heading'>Duis aliquet faucibus mi quis faucibus.  </h1>
                    </div>
                    <div className="contact-form-input">

                        <img className='form-image' src={contactImg} alt="" />

                        <form onSubmit={formSubmitHandler}>
                            <div className="form-inputs">

                                <div className="name-input">
                                    <div className="form-inputss">
                                        <label htmlFor="firstname">First Name*</label>
                                        <input className="nameInput" type="text" id="firstname" ref={firstNameRef} required />
                                    </div>
                                    <div className="form-inputss">
                                        <label htmlFor="lastname">Last Name*</label>
                                        <input className="nameInput" type="text" id="lastname" ref={lastNameRef} required />
                                    </div>

                                </div>
                                <div className="space2"></div>

                                <label htmlFor="email">Email*</label>
                                <input className="emailInput" type="email" id="email" ref={emailRef} required />
                                <div className="space2"></div>
                                <label htmlFor="lastname">Message*</label>
                                <textarea className="messageInput" type="text" id="message" ref={messageRef} required maxLength='100' />




                            </div>
                            <div className="space2"></div>
                            <button className="submitButton">Send</button>
                        </form>


                    </div>

                </div>

            </div>
            <div className="footer">
                <PageFooter />
            </div>
        </React.Fragment>
    )
}

export default ContactPage;