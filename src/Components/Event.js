import React from "react";
import Bird from "../Assets/bird.png";
import Dual from "../Assets/love-dual.png"

const About = () => {
    return <div class="event">
        <section id="event-section">
                <div class="div-title cwhite">
                    <div class="title-top-icon"><img src={Bird} alt=""/></div>
                    <div class="title-text-div">
                        <p class="font-title text6 cblack">План мероприятия</p>
                    </div>
                    <div class="title-bottom-icon"><img src={Dual} alt=""/></div>
                </div>
                <div className="div-event">
                    <div className="event-date">
                        <p class="text5 cred text-center">Церемония бракосочетания</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Сбор перед зданием ЗАГСа</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 13:50</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Гости начинают размещаться в залах для ожидания</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 14:00</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Начало бракосочетания</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 14:20</p>
                        <p class="event-text">Покидаем здание ЗАГСа .</p>
                    </div>
                    <div className="event-date">
                        <p class="text5 cred text-center">Прогулка</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Софийская набережная</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 15:00</p>
                        <p class="text5 cred text-center">Место торжества</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Новгородский район, деревня Стрелка, улица Береговая 1Б</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 16:00</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Прибытие на место и размещение в доме</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 16:30</p>
                        <p class="text2 text-center"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Начало праздничного банкета</p>
                        <p class="text3 text-center"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; 17:00</p>
                    </div>
                </div>

        </section>
    </div>;
};

export default About;

// План мероприятия
// 1. Церемония бракосочетания
//   Сбор перед зданием ЗАГСа в 13:50
//   В 14:00 Гости начинают размещаться в залах для ожидания
//   В 14:20 начало бракосочетания
//   Покидаем здание ЗАГСа 
// 2. 15:00 – 16:00 прогулка по Софийской набережной
// 3. В 16:00 отправляемся в основное место проведения торжества - Новгородский район, деревня Стрелка, улица Береговая 1Б
//   В 16:30 прибытие на место и размещение в доме
// 4. В 17:00 начало праздничного банкета