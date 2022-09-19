import React from "react";
import "./mainPageInfo.scss";
import avatar from "../../assets/img/mainPageAvatar.png";
import arrow from "../../assets/img/arrow.svg";
import { useNavigate } from "react-router-dom";

const MainPageInfo = () => {
    let navigate = useNavigate();
    return (
        <div className="container">
            <div className="main-page">
                <div className="main-page__title">
                    <h1>
                        Hello I'm <span>Anton Strelnikov</span>
                    </h1>
                    <h2>Frontend Developer</h2>
                </div>
                <div className="main-page__avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="main-page__link" onClick={() => navigate("/projects")}>
                    View my works <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainPageInfo;
