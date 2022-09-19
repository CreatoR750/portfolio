import React from "react";
import "./modal.scss";

const Modal = ({ setIsOpen }) => {
    const closeButton = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const outsideClick = (e) => {
        if (e.target.className === "modal__back") {
            setIsOpen(false);
        }
    };
    return (
        <div
            className="modal__back"
            onClick={(e) => {
                outsideClick(e);
            }}
        >
            <div className="modal__wrapper">
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
                    <input className="custom-input" type="text" placeholder="Name" />
                    <input className="custom-input" type="text" placeholder="Email" />
                    <input className="custom-input" type="text" placeholder="Message" />
                </div>
                <div className="modal__button">
                    <button className="send-btn" onClick={() => setIsOpen(false)}>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
