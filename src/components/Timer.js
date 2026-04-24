import React, { useState, useEffect } from "react";

function Counterapp() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  // ⏱️ seconds → MM:SS
  const formatTime = (t) => {
    const mins = String(Math.floor(t / 60)).padStart(2, "0");
    const secs = String(t % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Timer</h2>

        <h1 style={styles.time}>{formatTime(count)}</h1>

        <div>
          <button style={styles.btn} onClick={() => setRunning(true)}>Start</button>
          <button style={styles.btn} onClick={() => setRunning(false)}>Pause</button>
          <button
            style={styles.btn}
            onClick={() => {
              setRunning(false);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#1a1818",
  },

  box: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    background: "#fff",
  },

  time: {
    fontSize: "40px",
    margin: "10px 0",
  },

  btn: {
    margin: "5px",
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default Counterapp;