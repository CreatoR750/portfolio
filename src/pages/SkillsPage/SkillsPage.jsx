import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SkillsInfo from "../../components/SkillsInfo/SkillsInfo";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { motion } from "framer-motion";
const SkillsPage = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageTitle title={"Skills"} />
                <SkillsInfo />
            </motion.div>
            <Footer />
        </>
    );
};

export default SkillsPage;
