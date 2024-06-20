import React, { useState, useEffect } from "react";
import Gan from "../Assets/gan.png";
import Map from "../Assets/map.png";

const Countdown = () => {
    const [countdownFinished, setCountdownFinished] = useState(false);
    const [countdown, setCountdown] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateCountdown = () => {
        const weddingDate = new Date("2024-08-30T14:20:00"); // Replace with your wedding date
        const currentDate = new Date();

        let difference = weddingDate.getTime() - currentDate.getTime();

        if (difference > 0) {
            const oneYear = 1000 * 60 * 60 * 24 * 365;
            const oneDay = 1000 * 60 * 60 * 24;
            const oneHour = 1000 * 60 * 60;
            const oneMinute = 1000 * 60;
            const oneSecond = 1000;

            const years = Math.floor(difference / oneYear);
            difference -= years * oneYear;

            const days = Math.floor(difference / oneDay);
            difference -= days * oneDay;

            const hours = Math.floor(difference / oneHour);
            difference -= hours * oneHour;

            const minutes = Math.floor(difference / oneMinute);
            difference -= minutes * oneMinute;

            const seconds = Math.floor(difference / oneSecond);

            return { years, days, hours, minutes, seconds };
        } else {
            setCountdownFinished(true); // Countdown has finished
            return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { years, days, hours, minutes, seconds } = countdown;

    return (
        <div>
            <section id="countdown-section">
                <div className="countdown">
                    <div className="countdown-content">
                        <div className="div-count">
                            <p className="invitation">
                                {!countdownFinished && <span className="disSMBM">Wedding Invitation</span>}
                                {countdownFinished && <span className="disAMar">We are Family now</span>}
                            </p>
                            <div className="con-pat">
                                <div className="left cwhite text-center">
                                    <p className="text5 disBMar">We invite you to the wedding of</p>
                                    <p className="BG-nam">Sanya &nbsp;&nbsp;<img src={Gan} alt=""/>&nbsp; Sofiya</p>
                                    <br/>
                                    <p className="text5">
                                        <span className="disBMar">on</span>
                                    </p>
                                    <p className="text6">Pyatnica, 30<sup>th</sup> Aug, 2024 at 14:20 p.m</p>
                                    <p className="text5">
                                        <span className="disBMar"><br/><br/><br/></span>
                                    </p>
                                    <p className="text4"><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; L.B Convention, Beside S.R.R Function Hall, Nirmal Road, Bhainsa</p>
                                    <br/>
                                    <div className="flex-row disBMar">
                                        <a href="https://wa.me/917680904589">
                                            <div className="but-map">
                                                <div className="but-map-lay flex-row">
                                                    <div className="flex-row">
                                                        <div><img src={Map} alt=""/></div>
                                                        <div>
                                                            <p className="tex">Google Maps</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="text5 cwhite text-center">
                                        <span className="disBMar">We are left with</span>
                                    </p>
                                    <div id="div-con-tim">
                                        <div className="div-com">
                                            <div className="tim-val"><p>{years}</p></div>
                                            <div className="tim-val-nam"><p>Years</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{days}</p></div>
                                            <div className="tim-val-nam"><p>Days</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{hours}</p></div>
                                            <div className="tim-val-nam"><p>Hours</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{minutes}</p></div>
                                            <div className="tim-val-nam"><p>Minutes</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{seconds}</p></div>
                                            <div className="tim-val-nam"><p>Seconds</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countdown;
