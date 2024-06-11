import { useEffect, useState } from "react";
import "./HomePage.css";
import Background from "./profile.jpg";
import ScrollToShowContent from "./ScrollToShowContent";
import Skills from "./Content/Skills";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
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
  return (
    <div>
      <div className="home-front-container">
        <div className="image-container">
          <img src={Background} alt="My Example" className="my-image" />
        </div>
        <div>
          <h2>「　Welcome　｜　Selamat Datang　｜　いらっしゃいませ　」</h2>
          <br />
          <div className={`fade-in ${isVisible ? "active" : ""}`}>
            <h1>Altaf Barelvi</h1>
            <h3>
              Fullstack Developer ・ Researcher ・ World Traveler ・ Learner
            </h3>
            <h4 className="home-intro">
              Born in Indonesia and living a nomadic lifestyle in Germany, the
              UK, and the USA, I have always loved building/exploring/learning
              new things from around the world and the internet. This site aims
              to showcase how I see the world through
              projects/interests/experiences
            </h4>
          </div>
        </div>
      </div>

      <ScrollToShowContent
        contents={[
          {
            triggerPoint: 300,
            render: () => <Skills />,
          },
          {
            triggerPoint: 600,
            render: () => (
              <div>
                <h2>Header 2</h2>
                <p>This is a more complex div with some text.</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
