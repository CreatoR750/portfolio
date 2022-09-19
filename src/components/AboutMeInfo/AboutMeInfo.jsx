import React from "react";
import "./aboutMeInfo.scss";
import avatar from "../../assets/img/aboutMe.png";
import { motion } from "framer-motion";
const AboutMeInfo = () => {
    return (
        <div className="container">
            <div className="about-me">
                <div className="about-me__info">
                    <div>
                        <p>
                            I'm Anton Strelnikov, a 23-year-old <span>Front-end developer</span> . I completed my bachelor's program and entered the
                            master's program in the same specialty.
                        </p>
                        <p>
                            I like to <span>resolve</span> design problems, <span>create</span> smart user interface and <span>imagine</span> useful
                            interaction, developing rich web experiences and web applications.
                        </p>
                    </div>
                </div>
                <div className="about-me__avatar">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMeInfo;
