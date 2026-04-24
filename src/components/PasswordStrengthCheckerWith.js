import React, { useState } from 'react';

function PasswordStrengthCheckerWith() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (pwd) => {

    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    const weakRegex = /^(?=.*[a-z]).{4,}$/;

    if (strongRegex.test(pwd)) {
      return "Very Strong 💪";
    } else if (mediumRegex.test(pwd)) {
      return "Strong ✅";
    } else if (weakRegex.test(pwd)) {
      return "Medium ⚠️";
    } else if (pwd.length > 0) {
      return "Weak ❌";
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Password Strength Checker (Regex)</h2>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      {password && (
        <p>
          Strength: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
}

export default PasswordStrengthCheckerWith;