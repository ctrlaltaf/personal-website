import { useState } from "react";
import "./Envelope.css";
import { animate, motion, Variants } from "framer-motion";

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonX, setButtonX] = useState(0);
    const [emoji, setEmoji] = useState("📦");

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
            x: 0,
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };

    return (
        <div className="envelope-container">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
            >
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.97 }}
                    animate={{ x: buttonX }}
                    className="envelope-button"
                    onClick={() => {
                        if (isOpen) {
                            setButtonX(buttonX + 200);
                            setEmoji("📦")
                        } else {
                            setButtonX(buttonX - 200);
                            setEmoji("✅")
                        }
                        setIsOpen(!isOpen);
                    }}
                >
                    {emoji} Computational Biology{" "}
                </motion.button>
                <motion.div
                    className="card-container"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05,
                            },
                            x: buttonX,
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            },
                            x: buttonX,
                        },
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <motion.ul className="column-container">
                        <ul>
                            <h3>Description</h3>
                            <motion.li
                                variants={itemVariants}
                                className="description-column"
                            >
                                I am a computational biology researcher
                                specializing in developing{" "}
                                <b>full-stack tools</b> for visualizing protein
                                and regulatory networks across species. I use{" "}
                                <b>Python</b> and libraries like{" "}
                                <b>
                                    Matplotlib, NetworkX, and Pandas for data
                                    analysis and benchmarking{" "}
                                </b>
                                , and I utilize <b>RStudio</b> for handling
                                large datasets. My aim is to improve the
                                understanding of biological networks and create
                                user-friendly visualization tools for
                                biologists.
                            </motion.li>
                        </ul>
                        <ul className="skills-column">
                            <h3>Skills</h3>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                {" "}
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/React-React?logo=react&logoColor=white&labelColor=%2361dbfb&color=%2361dbfb"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/Express-Express?logo=express&logoColor=303030&labelColor=68A063&color=68A063"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/Neo4j-Neo4j?logo=neo4j&logoColor=%23014063&color=%23FCF9F6"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/NGINX-NGINX?logo=nginx&logoColor=green&color=black"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/RStudio-RStudio?logo=r&color=4AA4DE"
                                    height="25"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    src="https://img.shields.io/badge/Python-Python?logo=python&logoColor=ffde57&color=4584b6"
                                    height="25"
                                />
                            </motion.li>
                        </ul>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default Envelope;
