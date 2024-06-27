import { useState } from 'react';
import HeartResults from './HeartResults';

const HeartRiskForm = () => {
  const [formData, setFormData] = useState({
    Age: 18,
    Sex: '1',
    RestingBloodPressure: 120,
    SerumCholesterol: 200,
    FastingBloodSugar: '0',
    RestingECG: '1',
    MaxHeartRate: 100,
    ExerciseInducedAngina: '0',
    STDepression: 1.0,
    NumMajorVessels: 1.0,
    'ChestPainType_Atypical angina': '0',
    'ChestPainType_Non-anginal pain': '1',
    'ChestPainType_Typical angina': '0',
    Thalassemia_Normal: '1',
    'Thalassemia_Reversible defect': '0',
    SlopeSTSegment_Flat: '1',
    SlopeSTSegment_Upsloping: '0'
  });

  const [result, setResult] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = formData.Age;
    const stDepression = formData.STDepression;
    const numMajorVessels = formData.NumMajorVessels;
    const maxHeartRate = formData.MaxHeartRate;
    const serumCholesterol = formData.SerumCholesterol;

    if (age < 10 || age > 90) {
      alert('Age must be between 10 and 90.');
      return;
    }

    if (stDepression < 0) {
        alert('ST Depression must be a positive value.');
      return;
    }

    if (numMajorVessels < 0 || numMajorVessels > 4) {
        alert('Number of Major Vessels must be between 0 and 4.');
      return;
    }

    if (maxHeartRate < 60 || maxHeartRate > 220) {
        alert('Max Heart Rate must be between 60 and 220.');
      return;
    }

    if (serumCholesterol < 100 || serumCholesterol > 400) {
        alert('Serum Cholesterol must be between 100 and 400 mg/dL.');
      return;
    }

    console.log(JSON.stringify({ "input_data": formData }));

    fetch('https://german.azurewebsites.net/api/prediction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "input_data": formData })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON here
      })
      .then(data => {
        console.log(data); // Log parsed data
        setResult(data.prediction);
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
              <select id="chestPainTypeAtypicalAngina" name="ChestPainType_Atypical_angina" value={formData.ChestPainType_Atypical_angina}required>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="chestPainTypeNonAnginalPain">Chest Pain Type - Non-anginal Pain:</label>
              <select id="chestPainTypeNonAnginalPain" name="ChestPainType_Non_anginal_pain" value={formData.ChestPainType_Non_anginal_pain}  required>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="chestPainTypeTypicalAngina">Chest Pain Type - Typical Angina:</label>
              <select id="chestPainTypeTypicalAngina" name="ChestPainType_Typical_angina" value={formData.ChestPainType_Typical_angina}required>
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
              <select id="thalassemiaReversibleDefect" name="Thalassemia_Reversible_defect" value={formData.Thalassemia_Reversible_defect} required>
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

        </div>

      }

      {formData && result !== null && <HeartResults formData={formData} result={result} />}

    </>
  );
};

export default HeartRiskForm;