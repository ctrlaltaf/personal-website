import React, { useState, useEffect, ReactNode } from "react";
import "./HomePage.css";

interface ContentProps {
  triggerPoint: number;
  render: () => ReactNode;
}

const ScrollToShowContent: React.FC<{ contents: ContentProps[] }> = ({
  contents,
}) => {
  const [visibleContents, setVisibleContents] = useState<ContentProps[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const newVisibleContents = contents.filter((content) => {
        return scrollTop > content.triggerPoint;
      });

      setVisibleContents(newVisibleContents);
      setShowContent(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contents]);

  return (
    // <div className={`fade-in ${showContent ? "active" : ""}`}>
    <div style={{ height: "2000px" }}>
      {" "}
      {/* Add enough content to allow scrolling */}{" "}
      {visibleContents.map((content, index) => (
        <div key={index}>{content.render()}</div>
      ))}
    </div>
  );
};

export default ScrollToShowContent;
