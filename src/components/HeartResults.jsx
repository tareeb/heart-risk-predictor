import { useEffect, useState } from 'react';
import {healthdata} from "../data/data";  
import PropTypes from 'prop-types';

import brokenHeart from "../assets/brokenheart.png";
import happyHeart from "../assets/happyheart.png";

const HeartResults = ({ result, formData }) => {
  
    const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    generateRecommendations(formData);
  }, [formData]);

  const generateRecommendations = (formData) => {

    const recs = [];
    Object.keys(formData).forEach(key => {
      const param = healthdata.parameters[key];
      if (param) {
        const value = parseFloat(formData[key]);

        if (value > param.max && param.recommendations.high) {
          recs.push(...param.recommendations.high);
        } else if (value < param.lower && param.recommendations.low) {
          recs.push(...param.recommendations.low);
        }
      }
    });
    setRecommendations(recs);  
  };

  return (
    
    <div className="container">

      <div className="result-status">
        <h2>Heart Risk Result</h2>
        <img src={result === 1 ? brokenHeart : happyHeart} alt="heart" />
        <p>{result === 1 ? 'You are at risk' : 'You are safe'}</p>
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations">
          <h2>Recommendations to Improve Your Health</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};


HeartResults.propTypes = {
    result: PropTypes.number.isRequired,
    formData: PropTypes.object.isRequired,
};


export default HeartResults;
