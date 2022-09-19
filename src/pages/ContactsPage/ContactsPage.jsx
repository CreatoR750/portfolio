import React from "react";
import ContactsInfo from "../../components/ContactsInfo/ContactsInfo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { motion } from "framer-motion";
const ContactsPage = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageTitle title={"Contacts"} />
                <ContactsInfo />
            </motion.div>
            <Footer />
        </>
    );
};

export default ContactsPage;
