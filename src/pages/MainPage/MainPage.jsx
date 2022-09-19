import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainPageInfo from "../../components/MainPageInfo/MainPageInfo";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { motion
 } from "framer-motion";
const MainPage = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MainPageInfo />
            </motion.div>
            <Footer />
        </>
    );
};

export default MainPage;
