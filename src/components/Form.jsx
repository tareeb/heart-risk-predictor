import { useState } from 'react';

const HeartRiskForm = () => {
  const [formData, setFormData] = useState({
    Age: 0,
    Diabetes: '0',
    BMI: 0.0,
    "Alcohol Consumption": 0,
    "Sleep Hours Per Day": 0,
    "Physical Activity Days Per Week": 0,
    "Stress Level": 1,
    "Sex_Female": '0',
    "Smoking_Yes": '0'
  });

  const [riskProbability, setRiskProbability] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://ec2-18-223-203-15.us-east-2.compute.amazonaws.com:8080/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setRiskProbability((data.heart_risk_probability * 100).toFixed(2));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Heart Risk Predictor</h1>
      <form id="riskForm" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="Age" value={formData.Age} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="diabetes">Diabetes:</label>
          <select id="diabetes" name="Diabetes" value={formData.Diabetes} onChange={handleChange} required>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="bmi">BMI:</label>
          <input type="number" id="bmi" name="BMI" step="0.1" value={formData.BMI} onChange={handleChange} required />
        </div>

        <div className="slider-div">
          <label htmlFor="alcohol">Alcohol Consumption (0 to 7 days per week):</label>
          <span id="alcoholValue">{formData["Alcohol Consumption"]}</span>
        </div>
        <input type="range" id="alcohol" name="Alcohol Consumption" min="0" max="7" step="1" value={formData["Alcohol Consumption"]} onChange={handleChange} />

        <div className="slider-div">
          <label htmlFor="sleep">Sleep Hours Per Day (0 to 24 hours):</label>
          <span id="sleepValue">{formData["Sleep Hours Per Day"]}</span>
        </div>
        <input type="range" id="sleep" name="Sleep Hours Per Day" min="0" max="24" step="1" value={formData["Sleep Hours Per Day"]} onChange={handleChange} />

        <div className="slider-div">
          <label htmlFor="activity">Physical Activity Days Per Week (0 to 7 days):</label>
          <span id="activityValue">{formData["Physical Activity Days Per Week"]}</span>
        </div>
        <input type="range" id="activity" name="Physical Activity Days Per Week" min="0" max="7" step="1" value={formData["Physical Activity Days Per Week"]} onChange={handleChange} />

        <div className="slider-div">
          <label htmlFor="stress">Stress Level (1 to 10):</label>
          <span id="stressValue">{formData["Stress Level"]}</span>
        </div>
        <input type="range" id="stress" name="Stress Level" min="1" max="10" step="1" value={formData["Stress Level"]} onChange={handleChange} />

        <div className="input-group">
          <label htmlFor="sex">Sex:</label>
          <select id="sex" name="Sex_Female" value={formData.Sex_Female} onChange={handleChange} required>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="smoking">Smoking:</label>
          <select id="smoking" name="Smoking_Yes" value={formData.Smoking_Yes} onChange={handleChange} required>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <button type="submit">Predict Risk</button>
      </form>
      {riskProbability && (
        <div id="result">
          <h2>Heart Risk Probability:</h2>
          <p id="riskProbability">{riskProbability}%</p>
        </div>
      )}
    </div>
  );
};

export default HeartRiskForm;
