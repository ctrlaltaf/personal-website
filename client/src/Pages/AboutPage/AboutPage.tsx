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

    useEffect(() => {
        console.log(activeSection);
    }, [activeSection]);

    return (
        <div>
            {/* Section 1 */}
            <AnimatePresence>
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section1"
                >
                    {activeSection === 0 && (
                        <motion.div
                            className="persisting"
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 100, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            exit={{ opacity: 0, transition: { duration: 1.5 } }}
                        >
                            <h1>Section 1</h1>
                            <p>This is the first section.</p>
                        </motion.div>
                    )}
                </motion.section>

                {/* Section 2 */}
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section2"
                >
                    {activeSection === 1 && (
                        <motion.div
                            className="persisting2"
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 100, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            exit={{ opacity: 0, transition: { duration: 1.5 } }}
                        >
                            <h1>Section 2</h1>
                            <p>This is the second section.</p>
                        </motion.div>
                    )}
                </motion.section>

                {/* Section 3 */}
                <motion.section
                    className="section"
                    style={{ height: "100vh" }}
                    key="section3"
                >
                    {activeSection === 2 && (
                        <motion.div
                            className="persisting3"
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 100, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            exit={{ opacity: 0, transition: { duration: 1.5 } }}
                        >
                            <h1>Section 3</h1>
                            <p>This is the three section.</p>
                        </motion.div>
                    )}
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
