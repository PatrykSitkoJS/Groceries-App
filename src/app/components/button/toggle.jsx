import React from "react";
import "./toggle.scss";

function ToggleButton({ useState, className, onClick, ...other }) {
  const [toggled, setToggled] = useState;
  return (
    <div
      className={`toggle-button${toggled ? " toggled" : ""}${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      onClick={event => {
        setToggled(!toggled);
        if (typeof onClick === "function") {
          onClick(event);
        }
      }}
      {...other}
    />
  );
}

export default ToggleButton;
