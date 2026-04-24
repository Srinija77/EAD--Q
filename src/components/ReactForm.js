import React, { useState } from "react";

function ReactForm() {
  const [name, setName] = useState("");
  const [Phoneno,setPhoneno]=useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [registeredNo, setregisteredNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }
    if (Phoneno.trim() === "") {
      setError("Please enter your phoneNo");
      return;
    }

    setSubmittedName(name);
    setName("");
    setError("");
    setregisteredNo(Phoneno);
    setPhoneno("");
  };

  return (
    <div style={styles.container}>
      <h2> Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <label style={styles.label}>Name</label>   {/* 👈 add */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Phone Number</label>  {/* 👈 add */}
        <input
          type="text"
          placeholder="Enter the phone"
          value={Phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      {submittedName && (
        <p style={styles.output}>Submitted Name: {submittedName}</p>
      )}
      {registeredNo && (
        <p style={styles.output}>Registered Phone Number: {registeredNo}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },

  form: {
    marginTop: "15px",
    width: "400px",
    margin: "auto",
  },

  label: {                 // 👈 add
    display: "block",
    marginTop: "10px",
    fontWeight: "bold",
  },

  input: {
    padding: "8px",
    width: "90%",
    margin: "10px 0",
  },

  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },

  output: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "green",
  },

  error: {
    marginTop: "10px",
    color: "red",
  },
};

export default ReactForm;