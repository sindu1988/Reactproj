import { useRef } from "react";
import "./Form.css";

function Appform() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (name === "" || email === "") {
      alert("All fields are required!");
      return;
    }

    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Uncontrolled Form</h2>

        <input
          type="text"
          ref={nameRef}
          placeholder="Enter Name"
        />

        <input
          type="email"
          ref={emailRef}
          placeholder="Enter Email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appform;