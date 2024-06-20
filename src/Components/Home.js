import React from "react";
import Love from "../Assets/love.png";
import Dual from "../Assets/love-dual.png"

const Home = () => {
    return <div className="home-container">
        <section id="home-section">
            <div class="home">
                <div class="home-content">
                    <div class="div-home">         
                        <div class="home-title">
                            <div class="home-bro">
                                <p class="bro-title">Sanya</p>
                            </div>
                            <div class="home-symbol">
                                <img src={Love} alt="Love Symbol" class="love"/>
                            </div>
                            <div class="home-gro">
                                <p class="gro-title">Sofiya</p>
                            </div>
                        </div>
                        <p class="home-get-text text-center">
                            <span class="disBMar">are getting married</span>
                            {/* <span class="disAMar">Have got married</span> */}
                        </p>
                        <div class="home-date">
                            <div class="home-date-title">
                                <p class="home-date-text text-center">30 <sup>th</sup> Aug, 2024 14:00 p.m</p>
                            </div>
                            <div class="home-symbol-dual"><img src={Dual} alt="love-dual"/></div>
                        </div>
                        <div class="button disBMar" onclick="alert('save the date')">
                            <div class="layer"></div>
                            <div class="tex flex-col">
                                <h4>Save the Date</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Home;
