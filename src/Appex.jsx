import { useRef } from "react";

function Appex() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useRef Example</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
      />

      <br /><br />

      <button onClick={handleClick}>
        Show Value
      </button>
    </div>
  );
}

export default Appex;