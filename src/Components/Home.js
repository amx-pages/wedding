import React, { useState } from "react";
import Love from "../Assets/love.png";
import Dual from "../Assets/love-dual.png";

const Home = () => {
    const [marriageDate] = useState(new Date("2024-08-30T14:20:00"));
    const [registrationDeadline] = useState(new Date("2024-08-22T14:20:00"));

    const handleSaveDateClick = () => {
        const currentDate = new Date();

        if (currentDate < registrationDeadline)
            {alert("Пройти опрос");}
        else if (currentDate >= registrationDeadline && currentDate < marriageDate)
            {alert("Регистрация завершена. Вы все еще можете связаться с нами для получения более подробной информации. Для контактов перейдите в конец страницы.");}
        else
            {alert("Дата церемонии прошла. Регистрация закрыта.");}
        // Redirect to Google Form after the alert is closed
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfKeVvBOAhYxP_jCQAXkGzZFwpon0uhGLgzXo2XfUdoLADO8g/viewform?usp=sf_link";
    };

    return (
        <div>
            <section id="home-section">
                <div className="home">
                    <div className="home-content">
                        <div className="div-home">         
                            <div className="home-title">
                                <div className="home-bro">
                                    <p className="bro-title">Александр</p>
                                </div>
                                <div className="home-symbol">
                                    <img src={Love} alt="Love Symbol" className="love"/>
                                </div>
                                <div className="home-gro">
                                    <p className="gro-title">София</p>
                                </div>
                            </div>
                            <p className="home-get-text text-center text5">
                                {marriageDate < new Date() && (
                                    <span className="disAMar">Поженились</span>
                                )}
                                {marriageDate >= new Date() && (
                                    <span className="disBMar">скоро поженимся</span>
                                )}
                            </p>
                            <div className="home-date">
                                <div className="home-date-title">
                                    <p className="home-date-text text-center text7 cwhite">30 Aвгуста, 2024 14:00</p>
                                </div>
                                <div className="home-symbol-dual"><img src={Dual} alt="love-dual"/></div>
                            </div>
                            {marriageDate >= new Date() && (
                                <div className="button disBMar" onClick={handleSaveDateClick}>
                                    <div className="layer"></div>
                                    <div className="tex flex-col">
                                        <h4>Нажми на меня</h4>
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
