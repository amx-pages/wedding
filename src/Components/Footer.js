import React from "react";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
    return <div className="footer-wrapper">
        <section id="footer-section">
            <div className="footer-content">
                <div className="footer-section-one">
                    <div className="footer-icons">
                    <a href="https://t.me/The_Black_Monk95" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    <a href="https://vk.com/the_black_monk" target="_blank" rel="noopener noreferrer"><SlSocialVkontakte /></a>
                    </div>
                </div>
                <div className="footer-section-two">
                    <div className="footer-section-columns">
                        <span>Александр</span>
                        <span>+79622400533</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>София</span>
                        <span>+79969398367</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>Privacy Policy</span>
                        <span>Copyright©</span>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Footer;
