import { useState } from 'react';
import HeartResults from './HeartResults';

const HeartRiskForm = () => {
  const [formData, setFormData] = useState({
    Age: 50,
    Sex: '1',
    RestingBloodPressure: 120,
    SerumCholesterol: 200,
    FastingBloodSugar: '0',
    RestingECG: '1',
    MaxHeartRate: 100,
    ExerciseInducedAngina: '0',
    STDepression: 1.0,
    NumMajorVessels: 1.0,
    ChestPainType_Atypical_angina: '0',
    ChestPainType_Non_anginal_pain: '1',
    ChestPainType_Typical_angina: '0',
    Thalassemia_Normal: '1',
    Thalassemia_Reversible_defect: '0',
    SlopeSTSegment_Flat: '1',
    SlopeSTSegment_Upsloping: '0'
  });

  const [result, setResult] = useState(null);


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
    <>
    {result === null && 
    <div className="container">
      <h1>Heart Risk Predictor</h1>
      <form id="riskForm" onSubmit={handleSubmit}>

        {/* Age */}
        <div className="input-container">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="Age" value={formData.Age} onChange={handleChange} required />
        </div>

        {/* Sex (Dropdown) */}
        <div className="input-group">
          <label htmlFor="sex">Sex:</label>
          <select id="sex" name="Sex" value={formData.Sex} onChange={handleChange} required>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        {/* Resting Blood Pressure (Slider) */}
        <div className="slider-div">
          <label htmlFor="restingBloodPressure">Resting Blood Pressure (mm Hg): {formData.RestingBloodPressure}</label>
          <input type="range" id="restingBloodPressure" name="RestingBloodPressure" min="90" max="140" step="1" value={formData.RestingBloodPressure} onChange={handleChange} />
        </div>

        {/* Serum Cholesterol (Number Input) */}
        <div className="input-container">
          <label htmlFor="serumCholesterol">Serum Cholesterol (mg/dL):</label>
          <input type="number" id="serumCholesterol" name="SerumCholesterol" value={formData.SerumCholesterol} onChange={handleChange} required />
        </div>

        {/* Fasting Blood Sugar (Dropdown) */}
        <div className="input-group">
          <label htmlFor="fastingBloodSugar">Fasting Blood Sugar:</label>
          <select id="fastingBloodSugar" name="FastingBloodSugar" value={formData.FastingBloodSugar} onChange={handleChange} required>
            <option value="0">Below 120 mg/dL</option>
            <option value="1">Above 120 mg/dL</option>
          </select>
        </div>

        {/* Resting ECG (Dropdown) */}
        <div className="input-group">
          <label htmlFor="restingECG">Resting ECG:</label>
          <select id="restingECG" name="RestingECG" value={formData.RestingECG} onChange={handleChange} required>
            <option value="0">Normal</option>
            <option value="1">Having ST-T wave abnormality</option>
            <option value="2">Probable or definite left ventricular hypertrophy</option>
          </select>
        </div>

        {/* Max Heart Rate (Number Input) */}
        <div className="input-container">
          <label htmlFor="maxHeartRate">Max Heart Rate:</label>
          <input type="number" id="maxHeartRate" name="MaxHeartRate" value={formData.MaxHeartRate} onChange={handleChange} required />
        </div>

        {/* Exercise Induced Angina (Dropdown) */}
        <div className="input-group">
          <label htmlFor="exerciseInducedAngina">Exercise Induced Angina:</label>
          <select id="exerciseInducedAngina" name="ExerciseInducedAngina" value={formData.ExerciseInducedAngina} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        {/* ST Depression (Number Input) */}
        <div className="input-container">
          <label htmlFor="stDepression">ST Depression:</label>
          <input type="number" id="stDepression" name="STDepression" step="0.1" value={formData.STDepression} onChange={handleChange} required />
        </div>

        {/* Num Major Vessels (Number Input) */}
        <div className="input-container">
          <label htmlFor="numMajorVessels">Number of Major Vessels:</label>
          <input type="number" id="numMajorVessels" name="NumMajorVessels" step="1" value={formData.NumMajorVessels} onChange={handleChange} required />
        </div>

        {/* Chest Pain Types (Dropdowns) */}
        <div className="input-group">
          <label htmlFor="chestPainTypeAtypicalAngina">Chest Pain Type - Atypical Angina:</label>
          <select id="chestPainTypeAtypicalAngina" name="ChestPainType_Atypical_angina" value={formData.ChestPainType_Atypical_angina} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="chestPainTypeNonAnginalPain">Chest Pain Type - Non-anginal Pain:</label>
          <select id="chestPainTypeNonAnginalPain" name="ChestPainType_Non_anginal_pain" value={formData.ChestPainType_Non_anginal_pain} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="chestPainTypeTypicalAngina">Chest Pain Type - Typical Angina:</label>
          <select id="chestPainTypeTypicalAngina" name="ChestPainType_Typical_angina" value={formData.ChestPainType_Typical_angina} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        {/* Thalassemia Types (Dropdowns) */}
        <div className="input-group">
          <label htmlFor="thalassemiaNormal">Thalassemia - Normal:</label>
          <select id="thalassemiaNormal" name="Thalassemia_Normal" value={formData.Thalassemia_Normal} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="thalassemiaReversibleDefect">Thalassemia - Reversible Defect:</label>
          <select id="thalassemiaReversibleDefect" name="Thalassemia_Reversible_defect" value={formData.Thalassemia_Reversible_defect} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        {/* Slope ST Segment Types (Dropdowns) */}
        <div className="input-group">
          <label htmlFor="slopeSTSegmentFlat">Slope ST Segment - Flat:</label>
          <select id="slopeSTSegmentFlat" name="SlopeSTSegment_Flat" value={formData.SlopeSTSegment_Flat} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="slopeSTSegmentUpsloping">Slope ST Segment - Upsloping:</label>
          <select id="slopeSTSegmentUpsloping" name="SlopeSTSegment_Upsloping" value={formData.SlopeSTSegment_Upsloping} onChange={handleChange} required>
            <option value="0">No</option>
            <option value="1">Yes</option>
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

    }

    {formData && result !== null && <HeartResults formData={formData} result={result} />}
    
    </>
  );
};

export default HeartRiskForm;
