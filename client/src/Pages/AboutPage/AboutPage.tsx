import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./AboutPage.css";
const AboutPage = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

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
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ height: "300vh" }}>
            {/* Section 1 */}
            <motion.section
                className="section"
                style={{ height: "100vh" }}
                key="section1"
            >
                <AnimatePresence>
                    {activeSection === 0 && (
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
        // <div>
        //     {/* <h1>About Page</h1> */}
        //     {/* <MotionTesting></MotionTesting> */}
        //     {/* <Variant></Variant> */}
        //     <Envelope></Envelope>
        //     <br></br>
        //     <Envelope></Envelope>
        //     <br></br>
        //     <Envelope></Envelope>
        // </div>
    );
};

export default AboutPage;
