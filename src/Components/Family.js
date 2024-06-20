import React from "react";
import Bird from "../Assets/bird.png"
import Dual from "../Assets/love-dual.png"
import Pranay from "../Assets/pranay.jpeg"

const Family = () => {
    return <div className="family-container">
        <section id="family-section">
            <div className="family">
                <div className="family-content">
                    <div className="div-title">
                        <div class="title-top-icon"><img src={Bird} alt=""/></div>
                        <div class="title-text-div">
                            <p class="font-title cblack">Family</p>
                        </div>
                        <div class="title-bottom-icon"><img src={Dual} alt=""/></div>
                    </div>
                    <div class="choise">
                        <div class="cir-div-card choise-img" onclick="changeRelation(0)">
                            <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                            <div class="cir-card-bottom"></div>
                        </div>
                        <div class="cir-div-card choise-img" onclick="changeRelation(1)">
                            <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                            <div class="cir-card-bottom"></div>
                        </div>
                    </div>
                    <br/>
                    <div className="div-family">
                        <div className="family-members">
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Name</p>
                                    <p class="text4 tecen">Bride Relation</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Name</p>
                                    <p class="text4 tecen">Bride Relation</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Name</p>
                                    <p class="text4 tecen">Bride Relation</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Pranay} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Name</p>
                                    <p class="text4 tecen">Bride Relation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>;
};

export default Family;
