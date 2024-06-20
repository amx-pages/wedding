import React from "react";
import Bird from "../Assets/bird.png"
import Dual from "../Assets/love-dual.png"

const Message = () => {
    return <div>
            <section id="message-section">
            <div className="message">
                <div className="message-content">
                    <div className="div-message">
                        <div class="div-title">
                            <div class="title-top-icon"><img src={Bird} alt=""/></div>
                            <div class="title-text-div">
                                <p class="font-title cblack">Message</p>
                            </div>
                            <div class="title-bottom-icon"><img src={Dual} alt=""/></div>
                        </div>
                        <br/><br/><br/>
                    </div>
                    <div className="div-form">
                        <form id="Message_form" name="contactform" autocomplete="off" action="" onsubmit="return validateform()" method="POST">
                            <input class="form" type="text" id="fname" name="name" placeholder="Your name" required/>
                            <textarea class="form form-h" id="fmessage" name="message" placeholder="Message you wish to convey to the couple"></textarea>
                            <input type="hidden" name="_next" value=""/>
                            <input type="hidden" name="_subject" value="New submission"/>
                            <input type="hidden" name="_cc" value="bkkvarun24@gmail.com"/>
                            <input type="hidden" name="_template" value="table"/>
                        </form>
                        <div class="button" onclick="submit_form()">
                            <div class="layer"></div>
                            <div class="tex flex-col">
                                <h4>Submit</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>;
};

export default Message;
