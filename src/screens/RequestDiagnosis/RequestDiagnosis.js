import serialize from 'form-serialize';
import React from 'react';
import { Navigate } from 'react-router';

let RequestDiagnosis = () => {
    let [form, changeFormId] = React.useState(null);
    let onRequestDiagnosisPress = (e) => {
        e.preventDefault();
        let form = document.getElementById("diagnosisRequestData");
        let data = serialize(form, { hash: true });
        console.log(data);
        data.returning_user = true;
        data.wearing_mask = true;
        if (data.wearing_mask)
            data.wearing_mask = JSON.parse(data.wearing_mask);
        if (data.smoking_habits)
            data.smoking_habits = JSON.parse(data.smoking_habits);
        if (data.vaccination)
            data.vaccination = JSON.parse(data.vaccination);
        if (data.english_proficient)
            data.english_proficient = JSON.parse(data.english_proficient);
        if (data.symptoms && typeof (data.symptoms) === "object") {
            let string = ""
            if (data.symptoms.indexOf('none') >= 0)
                data.symptoms = "none";
            else {
                data.symptoms.forEach(symptom => {
                    string += symptom + ",";
                })
                data.symptoms = string.substring(0, string.length - 1);
            }
        }
        else
            if (typeof (data.symptoms) === "string") { }
            else
                data.symptoms = "none"

        if (data.conditions && typeof (data.conditions) === "object") {
            let string = ""
            if (data.conditions.indexOf('none') >= 0)
                data.conditions = "none";
            else {
                data.conditions.forEach(condition => {
                    string += condition + ",";
                })
                data.conditions = string.substring(0, string.length - 1);
            }
        }
        if (typeof (data.conditions) === "string") { }
        else
            data.conditions = "none"

        if (data.ailments && typeof (data.ailments) === "object") {
            let string = ""
            if (data.ailments.indexOf('none') >= 0)
                data.ailments = "none";
            else {
                data.ailments.forEach(ailment => {
                    string += ailment + ",";
                })
                data.ailments = string.substring(0, string.length - 1);
            }
        }
        if (typeof (data.ailments) === "string") { }

        else
            data.ailments = "none"

        if (data.pre_existing_conditions && typeof (data.pre_existing_conditions) === "object") {
            let string = ""
            if (data.pre_existing_conditions.indexOf('none') >= 0)
                data.pre_existing_conditions = "none";
            else {
                data.pre_existing_conditions.forEach(ailment => {
                    string += ailment + ",";
                })
                data.pre_existing_conditions = string.substring(0, string.length - 1);
            }
        }
        if (typeof (data.pre_existing_conditions) === "string") { }
        else
            data.pre_existing_conditions = "none"
        console.log(data);
        const url = new URL(
            "https://api.fiihealth.ro/api/forms"
        );

        const headers = {
            "Authorization": `Bearer ${JSON.parse(localStorage.userData).token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(res => {
                changeFormId(res.id);
            })
    }
    const [userInput, setUserInput] = React.useState(false);
    if (form !== null)
        return <Navigate to={`/recordAudio/${form}`} />
    else
        return <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 direction-col flex flex-col">
            {/* container */}
            <form id='diagnosisRequestData' onSubmit={(e) => {
                onRequestDiagnosisPress(e);
                return false;
            }}>
                <div className="flex justify-start flex-col items-start">
                    <div>
                        {/* first form */}
                        <span className="text-black font-bold">Metadata</span>

                        <div className="flex justify-start flex-col items-start sm:flex-row">
                            <div className="mr-0 sm:mr-4">
                                <label class="text-xs text-gray-700">Age</label>
                                <div class="mt-1">
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        required
                                        className="rounded-md text-gray-700"
                                        placeholder="Age"
                                    />
                                </div>
                            </div>

                            <div>
                                <label class="text-xs">Gender</label>
                                <div class="mt-1 ">
                                    <select
                                        name="gender"
                                        id="gender"
                                        placeholder="Gender"
                                        required
                                        className="rounded-md text-gray-700 w-52"
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            hidden
                                            className="text-gray-700"
                                        >
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label for="proficientEnglish" required>
                                Are you proficient in English?
                            </label>
                            <div class="flex">
                                <div className="mr-3">
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="proficientEnglish-option1"
                                        name="english_proficient"
                                        value={true}
                                    />
                                    <label for="proficientEnglish-option1">Yes</label>
                                </div>

                                <div>
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="english_proficient"
                                        id="proficientEnglish-option2"
                                        value={false}
                                    />
                                    <label for="proficientEnglish-option2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label for="proficientEnglish" required>
                                Have you been in contact with someone diagnosed with Covid19 in the last 5 days?
                            </label>
                            <div class="flex">
                                <div className="mr-3">
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="been_in_contact1"
                                        name="been_in_contact"
                                        value={true}
                                    />
                                    <label for="been_in_contact1">Yes</label>
                                </div>

                                <div>
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="been_in_contact"
                                        id="been_in_contact2"
                                        value={false}
                                    />
                                    <label for="been_in_contact2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <label for="smokingHabits" required>
                                Do you have smoking habits?
                            </label>
                            <div class="flex">
                                <div className="mr-3">
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="smokingHabits-option1"
                                        name='smoking_habits'
                                        value="true"
                                    />
                                    <label for="smokingHabits-option1">Yes</label>
                                </div>

                                <div>
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="smokingHabits-option2"
                                        name='smoking_habits'
                                        value="false"
                                    />
                                    <label for="smokingHabits-option2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <label for="vaccination" required>
                                Vaccination Status?
                            </label>
                            <div class="flex">
                                <div className="mr-3">
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="vaccination-option1"
                                        name='vaccination'
                                        value="true"
                                    />
                                    <label for="vaccination-option1">Yes</label>
                                </div>

                                <div>
                                    <input
                                        class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                        type="radio"
                                        id="vaccination-option2"
                                        name='vaccination'
                                        value="false"
                                    />
                                    <label for="vaccination-option2">No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        {/* second form */}
                        <span className="text-black font-bold">Health Status</span>

                        <div className="mt-3">
                            <label for="symptoms" required>
                                Do you have any of these symptoms?
                            </label>
                            <div class="flex-row sm:flex">
                                <div class="flex-col">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option1"
                                            value="Cold"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option1">Cold</label>
                                    </div>

                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option2"
                                            value="Cough"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option2">Cough</label>
                                    </div>
                                </div>

                                <div class="flex-col">
                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option3"
                                            value="Fever"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option3">Fever</label>
                                    </div>

                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option4"
                                            value="Diarrhoea"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option4">Diarrhoea</label>
                                    </div>
                                </div>
                                <div class="flex-col">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option5"
                                            value="Sore Throat"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option5">Sore Throat</label>
                                    </div>

                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="symptoms-option6"
                                            value="none"
                                            name="symptoms"
                                        />
                                        <label for="symptoms-option6">None of the above</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label for="symptoms" required>
                                Do you have any of these conditions?
                            </label>
                            <div class="flex-row sm:flex">
                                <div class="flex-col">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="conditions-option1"
                                            name='conditions'
                                            value="Loss of Smell or Taste"
                                        />
                                        <label for="conditions-option1">
                                            Loss of Smell or Taste
                                        </label>
                                    </div>

                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="conditions-option2"
                                            name='conditions'
                                            value="Breathing Difficulties"
                                        />
                                        <label for="conditions-option2">
                                            Breathing Difficulties
                                        </label>
                                    </div>
                                </div>

                                <div class="flex-col mr-3">
                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="conditions-option3"
                                            name='conditions'
                                            value="Muscle Pain"
                                        />
                                        <label for="conditions-option3">Muscle Pain</label>
                                    </div>
                                    <div class="flex-col">
                                        <div className="mr-3">
                                            <input
                                                class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="conditions-option5"
                                                name='conditions'
                                                value="Fatigue"
                                            />
                                            <label for="conditions-option5">Fatigue</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="conditions-option4"
                                            name='conditions'
                                            value="none"
                                        />
                                        <label for="conditions-option4">None of the above</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-3">
                            <label for="symptoms" required>
                                Do you have any of these respiratory ailments?
                            </label>
                            <div class="flex-row sm:flex">
                                <div class="flex-col">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="respiratoryAilments-option1"
                                            name='ailments'
                                            value="Pneumonia"
                                        />
                                        <label for="respiratoryAilments-option1">Pneumonia</label>
                                    </div>

                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="respiratoryAilments-option2"
                                            name='ailments'
                                            value="Others"
                                        />
                                        <label for="respiratoryAilments-option2">Others</label>
                                    </div>
                                </div>

                                <div class="flex-col mr-3">
                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="respiratoryAilments-option3"
                                            name='ailments'
                                            value="Asthma"
                                        />
                                        <label for="respiratoryAilments-option3">Asthma</label>
                                    </div>

                                    <div class="flex-col">
                                        <div className="mr-3">
                                            <input
                                                class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="respiratoryAilments-option5"
                                                name='ailments'
                                                value="Chronic Lung Disease"
                                            />
                                            <label for="respiratoryAilments-option5">
                                                Chronic Lung Disease
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="respiratoryAilments-option4"
                                            name='ailments'
                                            value="none"
                                        />
                                        <label for="respiratoryAilments-option4">
                                            None of the above
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label for="symptoms" required>
                                Do you have any of these pre-existing conditions?
                            </label>
                            <div class="flex-row sm:flex">
                                <div class="flex-col">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="pre-existingConditions-option1"
                                            name='pre_existing_conditions'
                                            value="Hypertension"
                                        />
                                        <label for="pre-existingConditions-option1">
                                            Hypertension
                                        </label>
                                    </div>

                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="pre-existingConditions-option2"
                                            name='pre_existing_conditions'
                                            value="Others"
                                        />
                                        <label for="pre-existingConditions-option2">Others</label>
                                    </div>
                                </div>

                                <div class="flex-col mr-3">
                                    <div className="mr-3">
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="pre-existingConditions-option3"
                                            name='pre_existing_conditions'
                                            value="Ischemic Heart Disease"
                                        />
                                        <label for="pre-existingConditions-option3">
                                            Ischemic Heart Disease
                                        </label>
                                    </div>
                                    <div class="flex-col">
                                        <div className="mr-3">
                                            <input
                                                class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="pre-existingConditions-option5"
                                                name='pre_existing_conditions'
                                                value="Diabetes"
                                            />
                                            <label for="pre-existingConditions-option5">Diabetes</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <input
                                            class="border-gray-300 rounded-sm duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                            type="checkbox"
                                            id="pre-existingConditions-option4"
                                            name='pre_existing_conditions'
                                            value="none"
                                        />
                                        <label for="pre-existingConditions-option4">
                                            None of the above
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        {/* third form */}
                        <span className="text-black font-bold">Covid Test Status</span><br /><br />

                        <label className='mt-3' for="symptoms" required>
                            Have you taken a COVID-19 test?
                        </label>

                        <div class="flex-col">
                            <div className="mr-3">
                                <input
                                    class="border-gray-300 rounded-ml duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                    type="radio"
                                    id="COVIDTest-option1"
                                    name='covid_test_status'
                                    value="waiting"
                                    onClick={() => setUserInput(true)} //will change when I will integrate with BE
                                />
                                <label for="COVIDTest-option1">
                                    Sample given for testing, waiting for report
                                </label>
                            </div>

                            <div className="mr-3">
                                <input
                                    class="border-gray-300 rounded-ml duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name='covid_test_status'
                                    id="COVIDTest-option2"
                                    value="positive"
                                    onClick={() => setUserInput(true)}
                                />
                                <label for="COVIDTest-option2">
                                    Tested positive in my last test
                                </label>
                            </div>

                            <div className="mr-3">
                                <input
                                    class="border-gray-300 rounded-ml duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name='covid_test_status'
                                    id="COVIDTest-option3"
                                    value="negative"
                                    onClick={() => setUserInput(true)}
                                />
                                <label for="COVIDTest-option3">
                                    Tested negative in my last test
                                </label>
                            </div>

                            <div className="mr-3">
                                <input
                                    class="border-gray-300 rounded-ml duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name='covid_test_status'
                                    id="COVIDTest-option4"
                                    value="none"
                                    onClick={() => setUserInput(false)}

                                />
                                <label for="COVIDTest-option4">Never taken a test</label>
                            </div>
                        </div>
                        {userInput ? (
                            <>
                                <div className="mt-3">
                                    <label for="modelTest" required>
                                        Which test have you taken?
                                    </label>
                                    <div class="flex">
                                        <div className="mr-3">
                                            <input
                                                class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                                type="radio"
                                                id="modelTest-option1"
                                                value="RT-PCR"
                                                name="test_type"
                                            />
                                            <label for="modelTest-option1">RT-PCR</label>
                                        </div>

                                        <div>
                                            <input
                                                class="border-gray-300 rounded-lg duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                                                type="radio"
                                                id="modelTest-option2"
                                                value="RAT"
                                                name="test_type"
                                            />
                                            <label for="modelTest-option2">RAT</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 mb-10 flex flex-col">
                                    <label for="dateTest" required>
                                        When did you take the test?
                                    </label>
                                    <input
                                        type="date"
                                        id="dateTest-option1"
                                        name='last_test_date'
                                        className="mt-2"
                                    />
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-12 disable mt-8" >
                    Save Profile
                </button>
            </form>
        </div>
}

export default RequestDiagnosis