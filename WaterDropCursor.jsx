import React, { useState, useEffect } from "react";
import logoImg from "./components/images/logo.png";
import { useMediaQuery } from "react-responsive";
import SvgLogo from "./components/SvgLogo";
const WaterDropCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 300);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      className={`custom-cursor ${isActive ? "" : "inactive"}`}
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    >
      <SvgLogo className="logo" />
    </div>
  );
};

export default WaterDropCursor;
