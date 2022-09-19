import React from "react";
import "./footer.scss";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__items">
                        <div className="footer__icons">
                            <a href="https://github.com/CreatoR750" target="_blank">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://t.me/C_reato_R750" target="_blank">
                                <FaTelegramPlane size={30} />
                            </a>
                            <a href="mailto:nokia8951@mail.ru">
                                <AiOutlineMail size={30} />
                            </a>
                        </div>
                        <div className="footer__text">©2022 CreatoR750</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
