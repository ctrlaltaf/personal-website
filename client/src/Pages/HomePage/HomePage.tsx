import { useEffect, useState } from "react";
import "./HomePage.css";
import Background from "./profile.jpg";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className={`fade-in ${isVisible ? "active" : ""}`}>
            <h2>My name is Altaf</h2>
            <ul>
              <li>
                <h3>Avid fullstack developer</h3>
              </li>
              <li>
                <h3>Researching and solving network biology problems</h3>
              </li>
              <li>
                <h3>Outdoor and bouldering enthusiast</h3>
              </li>
              <li>
                <h3>World traveller</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
