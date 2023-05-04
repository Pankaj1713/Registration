import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data to your backend 
    console.log(
      `Username: ${username}, Age: ${age}, AadhaarNumber: ${aadhaarNumber}, Contact: ${mobileNumber}, email: ${email}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter Your Name Here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label><br />
      <label>
        Age:
        <input
          type="number"
          placeholder="As Per On Your Govt. Id"
          value={age}
          onChange={(e) => setAge(e.target.value)}
    />
      </label><br />
      <label>
        Aadhaar number:
        <input
          type="number"
          placeholder="Enter Your Aadhaar Number Here"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value)}
     />
      </label><br />
      <label>
        Contact number:
        <input
          type="number"
          placeholder="Contact Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </label><br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
