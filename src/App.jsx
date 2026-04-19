import React from "react";
/*
function App() {
  const styles = {
    container: {
      backgroundColor: "#f0f4f8",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    input: {
      padding: "10px",
      width: "200px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <input type="text" placeholder="Enter text" style={styles.input} />
        <br />
        <button style={styles.button}>Submit</button>
      </div>
    </div>
  );
}

export default App;
*/
/*
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="box">
        <input className="input" type="text" placeholder="Enter text" />
        <br />
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default App;


import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input className={styles.input} placeholder="Enter text" />
        <br />
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
}

export default App; 

import styled from "styled-components";

const Container = styled.div`
  background: #fce4ec;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background: #9c27b0;
  color: white;
  border: none;
  border-radius: 5px;
`;

function App() {
  return (
    <Container>
      <Box>
        <Input placeholder="Enter text" />
        <br />
        <Button>Submit</Button>
      </Box>
    </Container>
  );
}

export default App; 
*/
function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow text-center">
        <input
          type="text"
          placeholder="Enter text"
          className="p-2 w-52 mb-3 border rounded"
        />
        <br />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;  