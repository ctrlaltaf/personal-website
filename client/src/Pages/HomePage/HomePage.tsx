import { useEffect, useState } from "react";
import "./HomePage.css";
import Background from "./profile.jpg";
import Fader from "./Fader";

interface FadeState {
  fade: string;
}
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Function to perform smooth scroll over a custom duration
    const smoothScrollTo = (endY: number, duration: number) => {
      const startY = window.scrollY;
      const startTime =
        "now" in window.performance ? performance.now() : new Date().getTime();

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const scroll = () => {
        const now =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const timeFunction = easeInOutQuad(time);
        window.scroll(0, Math.ceil(timeFunction * (endY - startY) + startY));

        if (window.scrollY !== endY) {
          requestAnimationFrame(scroll);
        } else {
          setIsVisible(true);
        }
      };

      scroll();
    };

    // Delay of 3 seconds (3000 milliseconds) before starting the scroll
    const delay = 750;

    const timer = setTimeout(() => {
      // Scroll down by 100 pixels over 2 seconds (2000 milliseconds)
      smoothScrollTo(200, 2000);
    }, delay);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Log the current Y-coordinate of the scroll position
      setScrollProgress(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [fadeClass, setFadeClass] = useState<FadeState>({
    fade: "fade-out",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fadeClass.fade == "fade-out" && isVisible) {
        setFadeClass({
          fade: "fade-in",
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.bottom >= window.innerHeight &&
          rect.bottom <= window.innerHeight + rect.height
        ) {
          const sectionId = section.getAttribute("id");
          if (sectionId && sectionId !== currentSection) {
            setCurrentSection(sectionId);
            console.log(`Reached section: ${sectionId}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div>
      <p>{scrollProgress}</p>
      <div className="home-front-container">
        <div className="image-container">
          <img src={Background} alt="My Example" className="my-image" />
        </div>
        <div className="test">
          <h2>「　Welcome　｜　Selamat Datang　｜　いらっしゃいませ　」</h2>
          <br />
          {isVisible && (
            <div className={fadeClass.fade}>
              <h1>Altaf Barelvi</h1>
              <h3>
                Fullstack Developer ・ Researcher ・ World Traveler ・ Learner
              </h3>
              <h4 className="home-intro">
                Born in Indonesia and living a nomadic lifestyle in Germany, the
                UK, and the USA, I have always loved building/exploring/learning
                new things from around the world and the internet. This site
                aims to showcase how I see the world through
                projects/interests/experiences
              </h4>
            </div>
          )}
        </div>
      </div>
      <div className="experiences-container">
        <h1>Experiences</h1>
        <div id="section1" className="section">
          <div className="content-title">
            <h2>Reed College </h2>
            <h2>Postbacc. Computational Biology Researcher</h2>
            <p>Portland, Oregon, USA</p>
          </div>
          <h3>July 2023 - Present</h3>

          <ul>
            <li>
              Working under Dr. Anna Ritz’s lab to support ongoing research in
              network biology
            </li>
            <li>
              Co-leading a web tool project, ProteinWeaver, to enhance
              visualization and analysis of protein interaction networks through
              the integration of ontological information. Presented poster at
              UCLA's Regulatory & Systems Genomics conference. Data driven
              project supporting three non-human species interactomes.
            </li>
            <li>
              Collaborating with UW-Madison in a project, SPRAS, to create a
              streamlined framework for handling multiple pathway reconstruction
              algorithms that connect genes and proteins of interest in the
              context of a general PPI network. Familiar with complex pathway
              reconstruction algorithms with large network data.
            </li>
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>
          </ul>
          <div className="content-skills">
            <h3>Technologies Used:</h3>
            <ul className="content-skills-list">
              <li className="content-skills-item">
                {" "}
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/React-React?logo=react&logoColor=white&labelColor=%2361dbfb&color=%2361dbfb"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Express-Express?logo=express&logoColor=303030&labelColor=68A063&color=68A063"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Neo4j-Neo4j?logo=neo4j&logoColor=%23014063&color=%23FCF9F6"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/NGINX-NGINX?logo=nginx&logoColor=green&color=black"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/RStudio-RStudio?logo=r&color=4AA4DE"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Python-Python?logo=python&logoColor=ffde57&color=4584b6"
                  height="25"
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div id="section2" className="section">
          <div className="content-title">
            <h2>Reed College </h2>
            <h2>Postbacc. Computational Biology Researcher</h2>
            <p>Portland, Oregon, USA</p>
          </div>
          <h3>July 2023 - Present</h3>

          <ul>
            <li>
              Working under Dr. Anna Ritz’s lab to support ongoing research in
              network biology
            </li>
            <li>
              Co-leading a web tool project, ProteinWeaver, to enhance
              visualization and analysis of protein interaction networks through
              the integration of ontological information. Presented poster at
              UCLA's Regulatory & Systems Genomics conference. Data driven
              project supporting three non-human species interactomes.
            </li>
            <li>
              Collaborating with UW-Madison in a project, SPRAS, to create a
              streamlined framework for handling multiple pathway reconstruction
              algorithms that connect genes and proteins of interest in the
              context of a general PPI network. Familiar with complex pathway
              reconstruction algorithms with large network data.
            </li>
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>{" "}
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>
          </ul>
          <div className="content-skills">
            <h3>Technologies Used:</h3>
            <ul className="content-skills-list">
              <li className="content-skills-item">
                {" "}
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/React-React?logo=react&logoColor=white&labelColor=%2361dbfb&color=%2361dbfb"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Express-Express?logo=express&logoColor=303030&labelColor=68A063&color=68A063"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Neo4j-Neo4j?logo=neo4j&logoColor=%23014063&color=%23FCF9F6"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/NGINX-NGINX?logo=nginx&logoColor=green&color=black"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/RStudio-RStudio?logo=r&color=4AA4DE"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Python-Python?logo=python&logoColor=ffde57&color=4584b6"
                  height="25"
                />
              </li>
            </ul>
          </div>
        </div>
        <div id="section3" className="section">
          <div className="content-title">
            <h2>Reed College </h2>
            <h2>Postbacc. Computational Biology Researcher</h2>
            <p>Portland, Oregon, USA</p>
          </div>
          <h3>July 2023 - Present</h3>

          <ul>
            <li>
              Working under Dr. Anna Ritz’s lab to support ongoing research in
              network biology
            </li>
            <li>
              Co-leading a web tool project, ProteinWeaver, to enhance
              visualization and analysis of protein interaction networks through
              the integration of ontological information. Presented poster at
              UCLA's Regulatory & Systems Genomics conference. Data driven
              project supporting three non-human species interactomes.
            </li>
            <li>
              Collaborating with UW-Madison in a project, SPRAS, to create a
              streamlined framework for handling multiple pathway reconstruction
              algorithms that connect genes and proteins of interest in the
              context of a general PPI network. Familiar with complex pathway
              reconstruction algorithms with large network data.
            </li>
            <li>
              Working in a collaborative research group with diverse backgrounds
              in computer science, biology, and neuroscience through sharing
              scientific literature and ideas
            </li>
          </ul>
          <div className="content-skills">
            <h3>Technologies Used:</h3>
            <ul className="content-skills-list">
              <li className="content-skills-item">
                {" "}
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/React-React?logo=react&logoColor=white&labelColor=%2361dbfb&color=%2361dbfb"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Express-Express?logo=express&logoColor=303030&labelColor=68A063&color=68A063"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Neo4j-Neo4j?logo=neo4j&logoColor=%23014063&color=%23FCF9F6"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/NGINX-NGINX?logo=nginx&logoColor=green&color=black"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/RStudio-RStudio?logo=r&color=4AA4DE"
                  height="25"
                />
              </li>
              <li className="content-skills-item">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Python-Python?logo=python&logoColor=ffde57&color=4584b6"
                  height="25"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
