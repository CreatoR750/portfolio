import "./App.scss";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";

import AboutMePage from "./pages/AboutMePage/AboutMePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <>
            <Header />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about-me" element={<AboutMePage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default App;
