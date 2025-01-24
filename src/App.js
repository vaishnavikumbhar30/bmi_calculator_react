// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  // making state of our applications 
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // logic 
  const calcBmi = (e) => {
    e.preventDefault();

    // Convert input values to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum) {
      alert("Please enter a valid weight and height");
    } else {
      // Calculate BMI
      let bmi = (weightNum / (heightNum * heightNum) * 703);
      setBmi(bmi.toFixed(1));

      // Determine message based on BMI range
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // reload
  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
  };

  return (
    <div className="App">
      <div>
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          {/* form */}
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          {/* button */}
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
