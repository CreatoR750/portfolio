import React from "react";
import "./projectCard.scss";

const ProjectCard = ({ img, logo, title, description, link }) => {
    return (
        <div className="card">
            <div className="card__hover">
                <span>{description}</span>
                <a href={link} target="_blank">
                    View on Git
                </a>
            </div>
            <div className="card__container" style={{ backgroundImage: `url(${img})` }}>
                <span className="card__title">
                    {logo && <img src={logo}></img>} {title}
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
