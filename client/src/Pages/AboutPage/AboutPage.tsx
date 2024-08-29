import { act, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./AboutPage.css";
const AboutPage = () => {
    const [activeSection, setActiveSection] = useState<number>(-1);
    const [persisting, setPersisting] = useState("persisting-fake");

    // Handle scroll to determine which section should be active
    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>(".section");
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        // console.log(scrollPosition)
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // console.log(index, sectionTop);
            // console.log(index, sectionHeight);

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
                console.log("start persisting");
                setPersisting("persisting");
                // console.log(scrollPosition);
                // console.log(sectionTop - sectionHeight/2);
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
    useEffect(() => {
        // console.log("activeSEction", activeSection);
    }, [activeSection]);

    return (
        <div style={{ height: "300vh", border: "2px solid black" }}>
            {/* Section 1 */}
            <motion.section
                className="section"
                style={{ height: "100vh" }}
                key="section1"
            >
                <AnimatePresence>
                    {activeSection === 0 && (
                        <motion.div
                            className={persisting}
                            animate={{ x: 100, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                            exit={{
                                x: -100,
                                opacity: 0,
                                transition: { duration: 0.5 },
                            }}
                        >
                            <h1>Section 1</h1>
                            <p>This is the first section.</p>
                        </motion.div>
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
                                animate={{ x: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    x: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <h1>Section 2</h1>
                                <p>This is the second section.</p>
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
                                animate={{ x: 100, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                exit={{
                                    x: -100,
                                    opacity: 0,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <h1>Section 3</h1>
                                <p>This is the three section.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>
        </div>
    );
};

export default AboutPage;
