import React from "react";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import "./projectsInfo.scss";
import anyrentLogo from "../../assets/img/anyrentLogo.svg";
import anyRentBack from "../../assets/img/anyRentBack.png";
import tamaBack from "../../assets/img/tamaBack.png";
import tamaLogo from "../../assets/img/tamaLogo.png";
import imageExplorerLogo from "../../assets/img/imageExplorerLogo.png";
import imageExplorerBack from "../../assets/img/imageExplorerBack.png";
import neuralBack from "../../assets/img/neuralBack.png";
import reactTableBack from "../../assets/img/reactTableBack.png";
import cough from "../../assets/img/cough.png";

const ProjectsInfo = () => {
    return (
        <div className="container">
            <div className="projects">
                <ProjectCard
                    title={"Anyrent"}
                    logo={anyrentLogo}
                    img={anyRentBack}
                    description={"Web application for rent"}
                    link={"https://github.com/CreatoR750/anyrent"}
                />
                <ProjectCard
                    title={"Tamagotchi"}
                    logo={tamaLogo}
                    img={tamaBack}
                    description={"Admin panel for mobile app"}
                    link={"https://github.com/CreatoR750/tamagotchi"}
                />
                <ProjectCard
                    title={"IMG Explorer"}
                    logo={imageExplorerLogo}
                    img={imageExplorerBack}
                    description={"Mobile application"}
                    link={"https://github.com/CreatoR750/image-exporer-mobile"}
                />
                <ProjectCard
                    title={"Neural App"}
                    img={neuralBack}
                    description={"Mobile application"}
                    link={"https://github.com/CreatoR750/Neural-App-Mobile"}
                />
                <ProjectCard
                    title={"React Table"}
                    img={reactTableBack}
                    description={"Create table from JSON file"}
                    link={"https://github.com/CreatoR750/React-Table"}
                />
                <ProjectCard
                    title={"Cough Analysis"}
                    img={cough}
                    description={"Neural network for cough analysis"}
                    link={"https://github.com/CreatoR750/Cough-Analysis"}
                />
            </div>
        </div>
    );
};

export default ProjectsInfo;
