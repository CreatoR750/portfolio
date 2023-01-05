import React, { useState } from "react";
import "./modal.scss";
import emailjs from "@emailjs/browser";

const Modal = ({ setIsOpen }) => {
    const [values, setValues] = useState({ name: "", email: "", message: "" });

    const closeButton = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const outsideClick = (e) => {
        if (e.target.className === "modal__back") {
            setIsOpen(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("service_j2nvput", "template_uny6d19", values, "L2WkCCzcAcK9w6E_k").then(
            (result) => {
                setIsOpen(false);
            },
            (error) => {
                console.log(error.text);
                setIsOpen(false);
            }
        );
    };

    return (
        <div
            className="modal__back"
            onClick={(e) => {
                outsideClick(e);
            }}
        >
            <form className="modal__wrapper" onSubmit={handleSubmit}>
                <div
                    className="modal__close-btn"
                    onClick={(e) => {
                        closeButton(e);
                    }}
                >
                    X
                </div>
                <div className="modal__header">
                    <h1>Let’s talk.</h1>
                    <span>Write me your message...</span>
                </div>
                <div className="modal__inputs">
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                    <input
                        className="custom-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                    <textarea
                        className="custom-textarea "
                        placeholder="Message"
                        name="message"
                        onChange={(e) => setValues({ ...values, message: e.target.value })}
                    />
                </div>
                <div className="modal__button">
                    <button className="send-btn">Send message</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
