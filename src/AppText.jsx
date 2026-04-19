import React, { useRef } from "react";
import TextBox from "./Textbox";

function AppText() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // focus the textbox
  };

  return (
    <div>
      <TextBox ref={inputRef} />
      <br /><br />
      <button onClick={handleClick}>
        Focus Textbox
      </button>
    </div>
  );
}

export default AppText;