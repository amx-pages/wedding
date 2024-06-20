import React from "react";
import Bird from "../Assets/bird.png"
import Dual from "../Assets/love-dual.png"

const Reception = () => {
    return <div className="home-container">
            <section id="reception-section">
            <div className="reception">
                <div className="reception-content">
                    <div className="div-reception">
                        <div class="div-title">
                            <div class="title-top-icon"><img src={Bird} alt=""/></div>
                            <div class="title-text-div">
                                <p class="font-title cblack">Reception</p>
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

export default Reception;
