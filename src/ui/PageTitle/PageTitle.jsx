import React from "react";
import "./pageTitle.scss";
const PageTitle = ({ title }) => {
    return (
        <div className="page-title">
            <div className="container">
                <div className="page-title__wrapper">{title}</div>
            </div>
        </div>
    );
};

export default PageTitle;
