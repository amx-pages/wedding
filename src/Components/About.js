import React from "react";
import Pranay from "../Assets/pranay.jpeg"
import Love from "../Assets/love.png";

const About = () => {
    return <div class="about">
        <section id="about-section">
            <div class="div-about text-center">
                <div class="photo-main">
                    <div class="photo-sub"><img src={Pranay} alt=""/></div>
                    <div class="photo-sub"><img src={Pranay} alt=""/></div>
                </div>
                <div class="photo-hover">
                    <div class="photo-sub"><img src={Love} alt=""/></div>
                </div>
            </div>
            <div class="about-div">
                <div class="about-text at-right">
                    <p class="text7 cred folav">Александр</p>
                    <p class="text3">Немного о женихе:</p>
                    <p class="text3">Рост - приличный</p>
                    <p class="text3">Характер - выносливый</p>
                    <p class="text3">Телосложение - упитанность отсутствует</p>
                    <p class="text3">Возраст - вечно молодой</p>
                    <p class="text3">Ум - светлый</p>
                    <p class="text3">Глаза - голубые о хитрым оттенков</p>
                    <p class="text3">Волосы - свои</p>
                </div>
                <div class="about-text">
                    <p class="text7 cred folav">София</p>
                    <p class="text3">Немного о невесте:</p>
                    <p class="text3">Рост - подходящий</p>
                    <p class="text3">Характер - упёртый</p>
                    <p class="text3">Фигура - умопомрачительная</p>
                    <p class="text3">Возраст - вечно молодой</p>
                    <p class="text3">Ум - в комплекте</p>
                    <p class="text3">Глаза - кошачьи зеленого цвета</p>
                    <p class="text3">Волосы - натуральные, длинные</p>
                    <p class="text3">                    
                    </p>
                </div>
            </div>
        </section>
    </div>;
};

export default About;
