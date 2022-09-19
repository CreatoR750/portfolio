import React from "react";
import "./contactsInfo.scss";
import { FaGithub, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import avatar from "../../assets/img/contacts.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

const ContactsInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            <div className="contacts">
                <div className="contacts__info">
                    <div className="contacts__item">
                        <AiOutlineMail size={50} />
                        <a>nokia8951@mail.ru</a>
                    </div>
                    <div className="contacts__item">
                        <FaTelegramPlane size={50} />
                        <a>@C_reato_R750</a>
                    </div>
                    <div className="contacts__item">
                        <FaGithub size={50} />
                        <a>CreatoR750</a>
                    </div>
                    <div className="contacts__item">
                        <FaDiscord size={50} />
                        <a>C_reato_R#5414</a>
                    </div>
                    <div className="contacts__send">
                        <span>Got something for me?</span>
                        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Send message</button>
                    </div>
                </div>
                <div className="contacts__avatar">
                    <img src={avatar} alt="" />
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
        </div>
    );
};

export default ContactsInfo;
