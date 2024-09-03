import { act, useEffect, useState } from "react";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
import "./InterestsPage.css";
import { MdScience } from "react-icons/md";
import { FaComputer, FaBookOpenReader } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

import CompBioInfo from "../../Components/CompBioInfo/CompBioInfo";
import SWEInfo from "../../Components/SWEInfo/SWEInfo";
import DataInfo from "../../Components/DataInfo/DataInfo";
import ResearchInfo from "../../Components/ResearchInfo/ResearchInfo";

const variants: Variants = {
    upDown: {
        y: ["0%", "-30%", "0%"], // Moves up 20% and then back to the start position
        transition: {
            duration: 2, // Duration of one cycle of the animation in seconds
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Loop the animation
        },
    },
};

const InterestsPage = () => {
    const [activeSection, setActiveSection] = useState<number>(-1);
    const [persisting, setPersisting] = useState("persisting-fake");

    // Handle scroll to determine which section should be active
    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>(".section");
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                setActiveSection(index);
            }

            if (
                index == 1 &&
                scrollPosition >= sectionTop - sectionHeight / 2 &&
                persisting != "persisting"
            ) {
                setPersisting("persisting");
            } else if (
                index == 1 &&
                scrollPosition <= sectionTop - sectionHeight / 2
            ) {
                setPersisting("persisting-fake");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="section-container">
            {/* Section 1 */}
            <motion.section
                className="section"
                style={{ height: "100vh" }}
                key="section1"
            >
                <AnimatePresence>
                    {activeSection === 0 && (
                        <div>
                            <motion.div
                                className={persisting}
                                animate={{ y: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    y: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <div className="title-container">
                                    <h1 className="title">
                                        Computational Biologist
                                    </h1>

                                    <motion.div
                                        variants={variants} // Apply the variants
                                        animate="upDown"
                                    >
                                        {" "}
                                        <MdScience className="icon-1" />
                                    </motion.div>
                                </div>
                                <CompBioInfo></CompBioInfo>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.section>

            {/* Section 2 */}
            <AnimatePresence>
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section2"
                >
                    <AnimatePresence>
                        {activeSection === 1 && (
                            <motion.div
                                className="persisting"
                                animate={{ y: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    y: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <div className="title-container">
                                    <h1 className="title">
                                        Software Engineering
                                    </h1>

                                    <motion.div
                                        variants={variants} // Apply the variants
                                        animate="upDown"
                                    >
                                        {" "}
                                        <FaComputer className="icon-2" />
                                    </motion.div>
                                </div>{" "}
                                <SWEInfo></SWEInfo>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>

            {/* Section 3 */}
            <AnimatePresence>
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section3"
                >
                    <AnimatePresence>
                        {activeSection === 2 && (
                            <motion.div
                                className="persisting"
                                animate={{ y: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    y: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <div className="title-container">
                                    <h1 className="title">
                                        Data Science & Visualization
                                    </h1>

                                    <motion.div
                                        variants={variants} // Apply the variants
                                        animate="upDown"
                                    >
                                        {" "}
                                        <FaDatabase className="icon-3" />
                                    </motion.div>
                                </div>{" "}
                                <DataInfo></DataInfo>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>

            {/* Section 4 */}
            <AnimatePresence>
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section4"
                >
                    <AnimatePresence>
                        {activeSection === 3 && (
                            <motion.div
                                className="persisting"
                                animate={{ y: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    y: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <div className="title-container">
                                    <h1 className="title">
                                        Research, Teaching, & Mentoring
                                    </h1>

                                    <motion.div
                                        variants={variants} // Apply the variants
                                        animate="upDown"
                                    >
                                        {" "}
                                        <FaBookOpenReader className="icon-4" />
                                    </motion.div>
                                </div>{" "}
                                <ResearchInfo></ResearchInfo>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>
        </div>
    );
};

export default InterestsPage;
