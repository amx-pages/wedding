import React, { useState } from "react";
import Love from "../Assets/love.png";
import Dual from "../Assets/love-dual.png";

const Home = () => {
    const [marriageDate] = useState(new Date("2024-08-30T14:20:00"));
    const [registrationDeadline] = useState(new Date("2024-08-25T14:20:00"));

    const handleSaveDateClick = () => {
        const currentDate = new Date();

        if (currentDate < registrationDeadline)
            {alert("Save the date!");}
        else if (currentDate >= registrationDeadline && currentDate < marriageDate)
            {alert("Registration finished. You can still contact us for more details.");}
        else
            {alert("The ceremony date has passed. Registration is closed.");}
        // Redirect to Google Form after the alert is closed
        window.location.href = "https://forms.google.com/your-google-form-link";
    };

    return (
        <div>
            <section id="home-section">
                <div className="home">
                    <div className="home-content">
                        <div className="div-home">         
                            <div className="home-title">
                                <div className="home-bro">
                                    <p className="bro-title">Sanya</p>
                                </div>
                                <div className="home-symbol">
                                    <img src={Love} alt="Love Symbol" className="love"/>
                                </div>
                                <div className="home-gro">
                                    <p className="gro-title">Sofiya</p>
                                </div>
                            </div>
                            <p className="home-get-text text-center">
                                {marriageDate < new Date() && (
                                    <span className="disAMar">Have got married</span>
                                )}
                                {marriageDate >= new Date() && (
                                    <span className="disBMar">are getting married</span>
                                )}
                            </p>
                            <div className="home-date">
                                <div className="home-date-title">
                                    <p className="home-date-text text-center">30<sup>th</sup> Aug, 2024 14:20 p.m</p>
                                </div>
                                <div className="home-symbol-dual"><img src={Dual} alt="love-dual"/></div>
                            </div>
                            {marriageDate >= new Date() && (
                                <div className="button disBMar" onClick={handleSaveDateClick}>
                                    <div className="layer"></div>
                                    <div className="tex flex-col">
                                        <h4>Save the Date</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
