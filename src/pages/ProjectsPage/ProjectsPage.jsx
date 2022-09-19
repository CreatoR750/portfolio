import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProjectsInfo from "../../components/ProjectsInfo/ProjectsInfo";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { motion } from "framer-motion";


const ProjectsPage = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageTitle title={"Projects"}  />
                <ProjectsInfo />
            </motion.div>

            <Footer />
        </>
    );
};

export default ProjectsPage;
