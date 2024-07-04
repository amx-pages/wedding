import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import Bird from "../Assets/bird.png";
import Dual from "../Assets/love-dual.png";

const Message = () => {
    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            formRef.current.reset();
        }, (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
        });
    };

    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
    };

    return (
        <div>
            <section id="message-section">
                <div className="message">
                    <div className="message-content">
                        <div className="div-message">
                            <div className="div-title">
                                <div className="title-top-icon"><img src={Bird} alt=""/></div>
                                <div className="title-text-div">
                                    <p className="font-title cwhite">Пожелание</p>
                                </div>
                                <div className="title-bottom-icon"><img src={Dual} alt=""/></div>
                            </div>
                            <br/><br/><br/>
                        </div>
                        <div className="div-form">
                            <form id="Message_form" name="contactform" autoComplete="off" onSubmit={sendEmail} ref={formRef}>
                                <input className="form" type="text" id="fname" name="from_name" placeholder="Ваше имя" required/>
                                <textarea className="form form-h" id="fmessage" name="message" placeholder="Если вы, по каким-либо причинам, не сможете присутствовать, вы можете оставить пожелание для молодожёнов."></textarea>
                            </form>
                            <div className="button" onClick={handleSubmit}>
                                <div className="layer"></div>
                                <div className="tex flex-col">
                                    <h4>Пожелать</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Message;
