import React from 'react';

let RequestDiagnosis = () => {
    let onRequestDiagnosisPress = () => {
        const url = new URL(
            "https://api.fiihealth.ro/api/forms"
        );

        const headers = {
            "Authorization": `Bearer ${JSON.parse(localStorage.userData).token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "age": 25,
            "gender": "male",
            "english_proficient": true,
            "returning_user": true,
            "wearing_mask": false,
            "smoking_habits": false,
            "vaccination": true,
            "symptoms": "cold,fever,cough",
            "conditions": "none",
            "ailments": "none",
            "pre_existing_conditions": "hypertension",
            "covid_test_status": "waiting"
        };

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
    return <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-12 disable" onClick={onRequestDiagnosisPress}>
        Save Profile
    </button>
}

export default RequestDiagnosis