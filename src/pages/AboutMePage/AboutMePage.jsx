import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../ui/PageTitle/PageTitle";
import AboutMeInfo from "../../components/AboutMeInfo/AboutMeInfo";
import { motion } from "framer-motion";
const AboutMePage = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageTitle title={"About me"} />
                <AboutMeInfo />
            </motion.div>
            <Footer />
        </>
    );
};

export default AboutMePage;
