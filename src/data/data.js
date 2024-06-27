const healthdata =  {
    "parameters": {
      "RestingBloodPressure": {
        "name": "Resting Blood Pressure",
        "units": "mm Hg",
        "optimal": 120,
        "lower": 90,
        "max": 140,
        "recommendations": {
          "high": [
            "Reduce sodium intake.",
            "Eat a balanced diet rich in fruits, vegetables, and whole grains.",
            "Exercise regularly (at least 30 minutes most days of the week).",
            "Limit alcohol consumption.",
            "Manage stress through techniques such as meditation or yoga.",
            "Maintain a healthy weight.",
            "Avoid smoking and secondhand smoke."
          ],
          "low": [
            "Increase salt intake (with medical supervision).",
            "Drink more water to prevent dehydration.",
            "Eat small, frequent meals to avoid blood pressure drops after eating.",
            "Avoid alcohol.",
            "Stand up slowly from sitting or lying down positions.",
            "Wear compression stockings to improve blood flow."
          ]
        }
      },
      "SerumCholesterol": {
        "name": "Serum Cholesterol",
        "units": "mg/dL",
        "optimal": 200,
        "lower": 150,
        "max": 240,
        "recommendations": {
          "high": [
            "Limit intake of saturated fats found in red meat and full-fat dairy products.",
            "Avoid trans fats found in many processed foods.",
            "Eat foods rich in omega-3 fatty acids, such as salmon, walnuts, and flaxseeds.",
            "Increase soluble fiber intake from foods like oats, fruits, beans, and lentils.",
            "Exercise regularly.",
            "Quit smoking.",
            "Limit alcohol consumption."
          ]
        }
      },
      "FastingBloodSugar": {
        "name": "Fasting Blood Sugar",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "high": [
            "Follow a balanced diet with a focus on low-glycemic index foods.",
            "Monitor carbohydrate intake and choose complex carbs.",
            "Exercise regularly to improve insulin sensitivity.",
            "Maintain a healthy weight.",
            "Avoid sugary drinks and snacks.",
            "Monitor blood sugar levels regularly.",
            "Take medications as prescribed by your healthcare provider."
          ]
        }
      },
      "RestingECG": {
        "name": "Resting ECG",
        "optimal": 0,
        "lower": 0,
        "max": 2,
        "recommendations": {
          "abnormal": [
            "Follow your doctor's advice regarding heart health.",
            "Adopt a heart-healthy diet.",
            "Exercise regularly, as advised by your doctor.",
            "Avoid smoking.",
            "Limit alcohol intake.",
            "Manage stress effectively.",
            "Take prescribed medications regularly."
          ]
        }
      },
      "MaxHeartRate": {
        "name": "Max Heart Rate",
        "optimal": 100,
        "lower": 85,  // This is a generic value, actual calculation based on age would be used
        "max": 200,   // This is a generic value, actual calculation based on age would be used
        "recommendations": {
          "low": [
            "Incorporate more aerobic exercises like walking, cycling, and swimming.",
            "Gradually increase exercise intensity under medical supervision.",
            "Ensure adequate hydration.",
            "Avoid excessive caffeine or stimulants before exercising.",
            "Regularly monitor your heart rate during exercises."
          ]
        }
      },
      "ExerciseInducedAngina": {
        "name": "Exercise Induced Angina",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "angina": [
            "Follow a heart-healthy diet.",
            "Exercise regularly but within the limits set by your healthcare provider.",
            "Avoid strenuous activities that trigger angina.",
            "Manage stress effectively.",
            "Avoid large meals and rich foods that can trigger angina.",
            "Take prescribed medications regularly.",
            "Avoid smoking and limit alcohol intake."
          ]
        }
      },
      "STDepression": {
        "name": "ST Depression",
        "optimal": 1.0,
        "lower": 0,
        "max": 2,
        "recommendations": {
          "depression": [
            "Follow a heart-healthy lifestyle.",
            "Avoid activities that cause chest pain or discomfort.",
            "Regularly monitor heart health as advised by your healthcare provider.",
            "Take prescribed medications regularly.",
            "Manage stress through relaxation techniques.",
            "Avoid smoking and limit alcohol consumption."
          ]
        }
      },
      "NumMajorVessels": {
        "name": "Num Major Vessels",
        "optimal": 1.0,
        "lower": 0,
        "max": 4,
        "recommendations": {
          "blocked_vessels": [
            "Follow a heart-healthy diet.",
            "Exercise regularly within safe limits.",
            "Avoid smoking.",
            "Maintain a healthy weight.",
            "Control other risk factors like high blood pressure, cholesterol, and diabetes.",
            "Take prescribed medications regularly.",
            "Manage stress effectively."
          ]
        }
      },
      "ChestPainType_Atypical angina": {
        "name": "Chest Pain Type - Atypical Angina",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "general": [
            "Get regular check-ups to monitor heart health.",
            "Follow a heart-healthy diet.",
            "Exercise regularly but within safe limits.",
            "Manage stress effectively.",
            "Avoid smoking and limit alcohol intake.",
            "Follow your doctor's advice regarding heart health and chest pain management."
          ]
        }
      },
      "ChestPainType_Non-anginal pain": {
        "name": "Chest Pain Type - Non-anginal Pain",
        "optimal": 1,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "general": [
            "Get regular check-ups to monitor heart health.",
            "Follow a heart-healthy diet.",
            "Exercise regularly but within safe limits.",
            "Manage stress effectively.",
            "Avoid smoking and limit alcohol intake.",
            "Follow your doctor's advice regarding heart health and chest pain management."
          ]
        }
      },
      "ChestPainType_Typical angina": {
        "name": "Chest Pain Type - Typical Angina",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "typical_angina": [
            "Avoid activities that cause chest pain.",
            "Take prescribed medications regularly.",
            "Follow a heart-healthy diet and lifestyle.",
            "Seek immediate medical attention if chest pain persists or worsens."
          ]
        }
      },
      "Thalassemia_Normal": {
        "name": "Thalassemia - Normal",
        "optimal": 1,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "normal": [
            "Maintain general health.",
            "Follow a balanced diet.",
            "Exercise regularly.",
            "Seek medical care as needed."
          ]
        }
      },
      "Thalassemia_Reversible defect": {
        "name": "Thalassemia - Reversible Defect",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "reversible_defect": [
            "Follow a balanced diet.",
            "Avoid iron supplements unless prescribed by a doctor.",
            "Regularly monitor hemoglobin levels.",
            "Seek regular medical care to manage and monitor the condition.",
            "Consider genetic counseling if planning a family."
          ]
        }
      },
      "SlopeSTSegment_Flat": {
        "name": "Slope ST Segment - Flat",
        "optimal": 0,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "flat": [
            "Regular heart monitoring and check-ups.",
            "Adopt a heart-healthy diet.",
            "Exercise regularly within safe limits.",
            "Manage stress effectively.",
            "Avoid smoking and limit alcohol intake.",
            "Take prescribed medications regularly."
          ]
        }
      },
      "SlopeSTSegment_Upsloping": {
        "name": "Slope ST Segment - Upsloping",
        "optimal": 1,
        "lower": 0,
        "max": 1,
        "recommendations": {
          "upsloping": [
            "Maintain a heart-healthy lifestyle.",
            "Regular exercise and balanced diet.",
            "Regular medical check-ups to monitor heart health."
          ]
        }
      }
    }
  }

export  {healthdata} ;
  