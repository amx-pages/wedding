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
                                {!countdownFinished && <span className="disSMBM">Приглашение на свадьбу</span>}
                                {countdownFinished && <span className="disAMar">Мы теперь семья</span>}
                            </p>
                            <div className="con-pat">
                                <div className="left cwhite text-center">
                                    <p className="text4">Приглашаем вас на свадьбу</p>
                                    <p className="BG-nam">Александра <img src={Gan} alt=""/> Софии&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                    <p className="text4">в</p>
                                    <p className="text4">Пятницу, 30 Августа, 2024 года в 14:00</p>
                                    <br/>
                                    <p className="text3"><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; Тихвинская, 11/16, Великий Новгород, Новгородская обл., 173001</p>
                                    <br/>
                                    <div className="flex-row">
                                        <a href="https://maps.app.goo.gl/Zx6ATFoF6jEn1r6d9">
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
                                        <span className="disBMar">Свадьба состоится через</span>
                                    </p>
                                    <div id="div-con-tim">
                                        <div className="div-com">
                                            <div className="tim-val"><p>{years}</p></div>
                                            <div className="tim-val-nam"><p>Годы</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{days}</p></div>
                                            <div className="tim-val-nam"><p>Дни</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{hours}</p></div>
                                            <div className="tim-val-nam"><p>Часы</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{minutes}</p></div>
                                            <div className="tim-val-nam"><p>Минуты</p></div>
                                        </div>
                                        <div className="div-com">
                                            <div className="tim-val"><p>{seconds}</p></div>
                                            <div className="tim-val-nam"><p>Секунды</p></div>
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
