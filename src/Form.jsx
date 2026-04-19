import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.name === "" || formData.email === "") {
      setError("All fields are required!");
      return;
    }

    setError("");
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow text-center"
      >
        <h2 className="text-xl mb-4">Controlled Form</h2>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border p-2 mb-3 w-full"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="border p-2 mb-3 w-full"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Submit Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;