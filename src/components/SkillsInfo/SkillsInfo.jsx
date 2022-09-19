import React from "react";
import "./skillsInfo.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";

import skills from "../../assets/img/skills.png";
const SkillsInfo = () => {
    return (
        <div className="container">
            <div className="skills">
                <div className="skills__icons">
                    <div className="skills__icons__wrapper">
                        <FaReact size={90} />
                        <span>React</span>
                    </div>
                    <div className="skills__icons__wrapper">
                        <FaHtml5 size={90} />
                        <span>HTML</span>
                    </div>
                    <div className="skills__icons__wrapper">
                        <FaCss3Alt size={90} />
                        <span>CSS</span>
                    </div>
                    <div className="skills__icons__wrapper">
                        <SiTypescript size={90} />
                        <span>TypeScript</span>
                    </div>
                    <div className="skills__icons__wrapper">
                        <SiRedux size={90} />
                        <span>Redux</span>
                    </div>
                    <div className="skills__icons__wrapper">
                        <FaSass size={90} />
                        <span>Sass</span>
                    </div>
                </div>
                <div className="skills__avatar">
                    <img src={skills} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SkillsInfo;
