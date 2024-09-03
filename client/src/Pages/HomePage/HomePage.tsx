import { useEffect } from "react";
import "./HomePage.css";
import { motion, useAnimation, Variants } from "framer-motion";
import InterestsPage from "../InterestsPage/InterestsPage";
import { FaAnglesDown } from "react-icons/fa6";
// import Work from "../../Components/Work/Work";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1, // Duration for the container's transition
            ease: "easeInOut", // Easing function for smooth transition
            staggerChildren: 0.75, // Staggering effect for children
            when: "beforeChildren", // Ensure this transition happens before children animate
        },
    },
    after: {
        opacity: 1,
        y: 10,
        transition: {
            type: "spring",
            stiffness: 10,
            damping: 0,
        },
    },
};

// Variants for each child
const childVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.75 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const HomePage = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Start the first animation
            await controls1.start("visible");
            // Start the second animation after the first one finishes
            await controls2.start("after");
        };
        sequence();
    }, [controls1, controls2]);

    return (
        <div>
            <div style={{ height: "100vh" }}>
                <motion.div
                    className="intro-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls1}
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
                    <div className="icon-container">
                        <motion.h5
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls2}
                        >
                            Scroll down to learn more!
                        </motion.h5>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls2}
                        >
                            <FaAnglesDown className="down-icon" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <h1 className="center-container">Interests/Areas of Focus</h1>
            <InterestsPage></InterestsPage>
            {/* <h1 className="center-container">Work Experience</h1>
            <Work></Work> */}
        </div>
    );
};

export default HomePage;
