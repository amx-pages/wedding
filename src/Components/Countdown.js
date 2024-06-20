import React from "react";
import Gan from "../Assets/gan.png"
import Map from "../Assets/map.png"

const Countdown = () => {
    return <div className="countdown-container">
            <section id="countdown-section">
            <div className="countdown">
                <div className="countdown-content">
                    <div class="div-count">
                        <p className="invitation">
                            <span class="disSMBM">Bride Family's wedding Invitation</span>
                            {/* <span class="disSFBM">Groom Family's wedding Invitation</span> */}
                            {/* <span class="disAMar">We are a Family now!</span> */}
                        </p>
                        <div class="con-pat">
                            <div className="left cwhite text-center">
                                <p class="text5 disBMar">We invite you to the wedding of</p>
                                <p class="BG-nam">Sanya &nbsp;&nbsp;<img src={Gan} alt=""/>&nbsp; Sofiya</p>
                                <br/>
                                <p class="text5">
                                    <span class="disBMar">on</span>
                                    {/* <span class="disAMar">got married on</span> */}
                                </p>
                                <p class="text6">Pyatnica, 30<sup>th</sup> Aug, 2024 at 14:00 p.m</p>

                                <p class="text5">
                                    <span class="disBMar"><br/><br/><br/></span>
                                    {/* <span class="disAMar">at<br></span> */}
                                    </p>
                                <p class="text4"><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp; L.B Convention, Beside S.R.R Function Hall, Nirmal Road, Bhainsa</p>
                                <br/>
                                <div class="flex-row disBMar">
                                <a href="wa.me/917680904589">
                                    <div class="but-map">
                                        <div class="but-map-lay flex-row">
                                            <div class="flex-row">
                                                <div><img src={Map} alt=""/></div>
                                                <div>
                                                    <p class="tex">Google Maps</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                            <div class="right">
                            <p class="text5 cwhite text-center">
                                <span class="disBMar">We are left with</span>
                                {/* <span class="disAMar">They are happy since </span> */}
                            </p>
                            <div id="div-con-tim">
                                <div class="div-com">
                                    <div class="tim-val"><p id="tim-year">5</p></div>
                                    <div class="tim-val-nam"><p id="tim-year-cat">Years</p></div>
                                </div>
                                <div class="div-com">
                                    <div class="tim-val"><p id="tim-day">5</p></div>
                                    <div class="tim-val-nam"><p id="tim-day-cat">Days</p></div>
                                </div>
                                <div class="div-com">
                                    <div class="tim-val"><p id="tim-hour">5</p></div>
                                    <div class="tim-val-nam"><p id="tim-hour-cat">Hours</p></div>
                                </div>
                                <div class="div-com">
                                    <div class="tim-val"><p id="tim-min">5</p></div>
                                    <div class="tim-val-nam"><p id="tim-min-cat">Minutes</p></div>
                                </div>
                                <div class="div-com">
                                    <div class="tim-val"><p id="tim-sec">5</p></div>
                                    <div class="tim-val-nam"><p id="tim-sec-cat">Seconds</p></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>;
};

export default Countdown;