import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return <div className="footer-wrapper">
        <section id="footer-section">
            <div className="footer-section-one">
                <div className="footer-icons">
                    <BsYoutube/>
                    <FaFacebookF/>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                </div>
                <div className="footer-section-columns">
                    <span>123-456-789</span>
                    <span>Aramxxx8691</span>
                    <span>email@email.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Privacy Policy</span>
                    <span>Copyright©</span>
                </div>
            </div>
        </section>
    </div>;
};

export default Footer;
