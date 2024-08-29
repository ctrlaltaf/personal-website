import { useEffect, useState } from "react";
import "./HomePage.css";
import { AnimatePresence, motion, Variants } from "framer-motion";
import AboutPage from "../AboutPage/AboutPage";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5, // Duration for the container's transition
            ease: "easeInOut", // Easing function for smooth transition
            staggerChildren: 0.75, // Staggering effect for children
            when: "beforeChildren", // Ensure this transition happens before children animate
        },
    },
};

// Variants for each child
const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
    return (
        <div>
            <div style={{ height: "100vh" }}>
                {/* <h2>
                    「　Welcome　｜　Selamat Datang　｜　いらっしゃいませ　」
                </h2> */}

                <motion.div
                    className="intro-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={childVariants}>
                        Altaf Barelvi
                    </motion.h1>
                    <motion.h2 variants={childVariants}>
                        Fullstack Developer ・ Researcher ・ Software Engineer
                        ・ World Traveler
                    </motion.h2>
                    <motion.h5 variants={childVariants}>
                        Born in Indonesia and living a nomadic lifestyle in
                        Germany, the UK, and the USA, I have always loved
                        building/exploring/learning new things from around the
                        world and the internet. This site aims to showcase how I
                        see the world through projects/interests/experiences
                    </motion.h5>
                </motion.div>
            </div>
            <AboutPage></AboutPage>
        </div>
    );
};

export default HomePage;
