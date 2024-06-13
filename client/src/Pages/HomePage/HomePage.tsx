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

  useEffect(() => {
    if (scrollProgress > 290) {
      setProgress(2);
      console.log("progress 2")
    } 
    else if (scrollProgress > 250) {
      setProgress(1);
      console.log("progress 1")

    }
  }, [scrollProgress]);

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
      {isVisible && progress >= 1 && <Fader text="1/X progress" />}
      {isVisible && progress >= 2 && <Fader text="2/X progress" />}
    </div>
  );
};

export default HomePage;
