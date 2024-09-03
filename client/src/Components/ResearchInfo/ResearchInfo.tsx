import { useState } from "react";
import "./ResearchInfo.css";
import { motion, Variants } from "framer-motion";

const ResearchInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonX, setButtonX] = useState(0);
    const [emoji, setEmoji] = useState("📦");

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
        closed: { opacity: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="envelope-container">
            <motion.nav
                initial={"closed"}
                animate={"open"}
                className="menu"
                variants={itemVariants}
            >
                <motion.div
                    className="card-container"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 1,
                                delayChildren: 0.5,
                                staggerChildren: 0.1,
                            },
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            },
                        },
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <motion.ul className="column-container">
                        <ul>
                            <h3 className="description-title">Description</h3>
                            <motion.li
                                variants={itemVariants}
                                className="description-column"
                            >
                                I am passionate about{" "}
                                <b>computer science education</b> and committed
                                to making it accessible to diverse individuals.
                                I have experience as a teaching assistant for
                                introductory computer science and computational
                                biology courses, where I supported lectures,
                                graded assignments, and provided student
                                guidance. Additionally, I have mentored students
                                on research projects, teaching them teamwork in
                                research settings, and have presented my
                                research at computational biology conferences
                                through poster presentations.
                            </motion.li>
                        </ul>
                        <ul className="skills-column">
                            <h3 className="skills-title">Skills</h3>
                            <motion.li
                                variants={itemVariants}
                                className="skills-item"
                            >
                                <b>Pair Programming</b>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="skills-item"
                            >
                                <b>Teaching Assistant</b>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="skills-item"
                            >
                                <b>Paper Writing</b>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="skills-item"
                            >
                                <b>Conference Presentation</b>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="skills-item"
                            >
                                <b>Public Speaking</b>
                            </motion.li>
                        </ul>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default ResearchInfo;
