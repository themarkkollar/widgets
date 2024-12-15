import { useState } from "react";
import "./Popover.scss";

type PopoverProps = {
  children: React.ReactNode;
  popoverContent: React.ReactNode;
};

const Popover = ({ children, popoverContent }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="popover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="popover__children">{children}</div>
      <div className={`popover__box ${isVisible ? "visible" : ""}`}>
        {popoverContent}
      </div>
    </div>
  );
};

export default Popover;
