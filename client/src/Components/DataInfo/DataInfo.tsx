import { useState } from "react";
import "./DataInfo.css";
import { motion, Variants } from "framer-motion";

const DataInfo = () => {
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
                                I have extensive experience with{" "}
                                <b>
                                    large-scale protein-protein and regulatory
                                    interaction datasets
                                </b>
                                , focusing on data curation, cleaning, and
                                analysis to extract biological insights. I am
                                skilled in using Neo4j for managing complex
                                networks and apply graph theory to analyze these
                                interactions. Additionally, I use visualization
                                tools like <b>Cytoscape</b> and am expanding my skills
                                with web-based libraries like D3.js to create
                                meaningful visualizations for researchers.
                            </motion.li>
                        </ul>
                        <ul className="skills-column">
                            <h3 className="skills-title">Skills</h3>

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
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/CytoscapeJS-CytoscapeJS?logo=cytoscapedotjs&color=black"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/Pandas-Pandas?logo=pandas&color=black"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/SciPy-SciPy?logo=scipy&color=white"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/NumPy-NumPy?logo=numpy&color=black"
                                />
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="content-skills-item"
                            >
                                <img
                                    alt="Static Badge"
                                    height="25"
                                    src="https://img.shields.io/badge/Plotly-Plotly?logo=plotly&color=grey"
                                />
                            </motion.li>
                        </ul>
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default DataInfo;
