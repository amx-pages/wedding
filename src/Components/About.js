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
                    <p class="text7 cred folav">Sanya</p>
                    <p class="text5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. deserunt rerum consectetur dolore! Vero, quaerat. Magni?</p>
                </div>
                <div class="about-text">
                    <p class="text7 cred folav">Sofiya</p>
                    <p class="text5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. deserunt rerum consectetur dolore! Vero, quaerat. Magni?</p>
                </div>
            </div>
        </section>
    </div>;
};

export default About;
