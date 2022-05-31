import React from 'react';

let UserProfile = () => {
    let [userData, changeUserData] = React.useState(JSON.parse(localStorage.userData))
    let adaptDate = (date) => {
        var dateRef = new Date(date);
        var dd = String(dateRef.getDate()).padStart(2, '0');
        var mm = String(dateRef.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = dateRef.getFullYear();

        let finalDate = + yyyy + '-' + mm + '-' + dd;
        return finalDate
    }
    let onSaveProfile = () => {
        let currentData = { ...userData };
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.userData).token}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: JSON.stringify({
                birth_day: currentData.birth_day,
                phone: currentData.phone,
                address: currentData.address,
                weight: currentData.weight,
                height: currentData.height,
                contact_person: currentData.contact_person,
                operations: currentData.operations,
                vaccines: currentData.vaccines,
                diseases: currentData.diseases,
                treatments: currentData.treatments,
                allergies: currentData.allergies
            }),
            redirect: 'follow'
        };

        fetch("https://api.fiihealth.ro/api/patients/" + JSON.parse(localStorage.userData).user_id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        localStorage.setItem("userData", JSON.stringify(currentData));
    }
    return <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 direction-col flex flex-col">
        <div className="grid grid-cols-1 gap-6 mt-6">
            <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                    onChange={(e => {
                        changeUserData({ ...userData, name: e.target.value })
                    })}
                    value={userData.name}
                    type="text"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Your name"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">E-mail</span>
                <input
                    onChange={(e => {
                        changeUserData({ ...userData, email: e.target.value })
                    })}
                    value={userData.email}
                    type="email"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="john@example.com"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Birthday</span>
                <input
                    onChange={(e => {
                        changeUserData({ ...userData, birth_day: e.target.value })
                    })}
                    value={adaptDate(userData.birth_day)}
                    type="date"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="11/11/2001"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Phone number</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, phone: e.target.value })
                    })}
                    value={userData.phone}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="+40"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Address</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, address: e.target.value })
                    })}
                    value={userData.address}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Str."
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Weight</span>
                <input
                    onChange={(e => {
                        changeUserData({ ...userData, weight: e.target.value })
                    })}
                    value={userData.weight}
                    type="number"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Weight in kg."
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Height</span>
                <input
                    onChange={(e => {
                        changeUserData({ ...userData, height: e.target.value })
                    })}
                    value={userData.height}
                    type="number"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Height in cm."
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Contact Person</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, contact_person: e.target.value })
                    })}
                    value={userData.contact_person}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Ex: Father"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Operations</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, operations: e.target.value })
                    })}
                    value={userData.operations}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Previouse operations"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Vaccines</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, vaccines: e.target.value })
                    })}
                    value={userData.vaccines}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Administrated vaccines"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Diseases</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, diseases: e.target.value })
                    })}
                    value={userData.diseases}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Diagnosed diseases"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Treatments</span>
                <input
                    type="text"
                    onChange={(e => {
                        changeUserData({ ...userData, treatments: e.target.value })
                    })}
                    value={userData.treatments}
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Active treatments"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Allergies</span>

                <input
                    onChange={(e => {
                        changeUserData({ ...userData, allergies: e.target.value })
                    })}
                    value={userData.allergies}
                    type="text"
                    className="
                    outline-0
                    outline-white
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder="Known allergies"
                />
            </label>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-12 disable" onClick={onSaveProfile}>
                Save Profile
            </button>
        </div>
    </div>
}

export default UserProfile;