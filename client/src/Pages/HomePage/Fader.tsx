import { useEffect, useState } from "react";
import "./Fader.css";

interface textProps {
  text: string;
}

interface FadeState {
  fade: string;
}

const Fader: React.FC<textProps> = ({ text }) => {
  const [fadeClass, setFadeClass] = useState<FadeState>({
    fade: "fade-out",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeClass.fade == "fade-out") {
        setFadeClass({
          fade: "fade-in",
        });
      }
    }, 100);

    return () => {
      clearInterval(timeout);
    };
  }, [fadeClass]);

  return (
    <>
      <h1 className={fadeClass.fade}>{text}</h1>
      <br />

    </>
  );
};

export default Fader;
