import { useEffect } from "react";
import Background from ".//2RTPuuM-tera-wallpaper.jpg";
import "./HomePage.css";
const HomePage = () => {
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
        }
      };

      scroll();
    };

    // Delay of 3 seconds (3000 milliseconds) before starting the scroll
    const delay = 500;

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
          <h1>Altaf</h1>
          <h1>Experience</h1>
          <h1>Skills</h1>
        </div>
      </div>

      <h1>Welcome</h1>
    </div>
  );
};

export default HomePage;
