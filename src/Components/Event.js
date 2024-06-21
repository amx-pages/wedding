import React from "react";
import Bird from "../Assets/bird.png";
import Dual from "../Assets/love-dual.png"

const About = () => {
    return <div class="event">
        <section id="event-section">
                <div class="div-title cwhite">
                    <div class="title-top-icon"><img src={Bird} alt=""/></div>
                    <div class="title-text-div">
                        <p class="font-title text6 cblack">Мероприятие</p>
                    </div>
                    <div class="title-bottom-icon"><img src={Dual} alt=""/></div>
                </div>
                <div className="div-event">
                    <div className="event-date">
                        <p class="text6 cred">The reception</p>
                        <p class="text4"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Our Residence</p>
                        <p class="text4"><i class="fa-solid fa-clock"></i> &nbsp;&nbsp; Aug 30, 2024 at 15:00 pm</p>
                        <p class="event-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
        </section>
    </div>;
};

export default About;
