import React from "react";
import Pranay from "../Assets/pranay.jpeg"
import Love from "../Assets/love.png";

const About = () => {
    return <div class="about">
        <section id="about-section">
            <div class="div-about text-center">
                <div class="photo-main">
                    <div class="photo-sub"><img src={Pranay}/></div>
                    <div class="photo-sub"><img src={Pranay}/></div>
                </div>
                <div class="photo-hover">
                    <div class="photo-sub"><img src={Love}/></div>
                </div>
            </div>
            <div class="about-div">
                <div class="about-text at-right">
                    <p class="text7 cred folav">Александр</p>
                    <p class="text4">Холодная зима. Медведь бродит по лесу, иногда останавливается, стучится головой о дерево и кричит: «Ну зачем, зачем я выпил столько кофе!?»</p>
                </div>
                <div class="about-text">
                    <p class="text7 cred folav">София</p>
                    <p class="text4">Поймав в красивом прыжке букет невесты, она обратила на себя внимание футбольного менеджера, который искал хорошего вратаря.</p>
                </div>
            </div>
        </section>
    </div>;
};

export default About;
