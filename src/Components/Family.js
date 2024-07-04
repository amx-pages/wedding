import React from "react";
import Bird from "../Assets/bird.png"
import Dual from "../Assets/love-dual.png"
// import Pranay from "../Assets/pranay.jpeg"
import Wife from "../Assets/wife.jpeg"
import Wife_Mother from "../Assets/wife_mother.png"
import Wife_Father from "../Assets/wife_father.jpg"
import Husband from "../Assets/husband.jpeg"
import Husband_Mother from "../Assets/husband_mother.jpg"
import Husband_Father from "../Assets/husband_father.jpg"

const Family = () => {
    return <div>
        <section id="family-section">
            <div className="family">
                <div className="family-content">
                    <div className="div-title">
                        <div class="title-top-icon"><img src={Bird} alt=""/></div>
                        <div class="title-text-div">
                            <p class="font-title cwhite">Семья</p>
                        </div>
                        <div class="title-bottom-icon"><img src={Dual} alt=""/></div>
                    </div>
                    <div class="choise">
                        <div class="cir-div-card choise-img" onclick="changeRelation(0)">
                            <div class="cir-card-top wife"><img src={Wife} alt=""/></div>
                            <div class="cir-card-bottom"></div>
                        </div>
                        <div class="cir-div-card choise-img" onclick="changeRelation(1)">
                            <div class="cir-card-top husband"><img src={Husband} alt=""/></div>
                            <div class="cir-card-bottom"></div>
                        </div>
                    </div>
                    <div className="div-family">
                        <div className="family-members">
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img className="wife_father" src={Wife_Father} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Александр</p>
                                    <p class="text4 tecen">Сергеевич Зыков</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top "><img className="wife_mother" src={Wife_Mother} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Светлана</p>
                                    <p class="text4 tecen">Владимировна Пюнненен</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Husband_Father} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Александр</p>
                                    <p class="text4 tecen">Викторович Слесарев</p>
                                </div>
                            </div>
                            <div class="div-members">
                                <div class="cir-div-card">
                                    <div class="cir-card-top"><img src={Husband_Mother} alt=""/></div>
                                    <div class="cir-card-bottom"></div>
                                </div>
                                <div class="fam-text">
                                    <p class="text5 tecen cred">Надежда</p>
                                    <p class="text4 tecen">Анатольевна Слесарева</p>
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
