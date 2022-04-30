import React from 'react';

let UserProfile = () => {
    return <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 direction-col flex flex-col">
        <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="block">
                <img
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt="Profile picture"
                    className="inline mr-4 w-16 rounded-full"
                ></img>
                <button
                    className="bg-emerald-500 bk-blue text-white active:bk-blue-tint font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Select image
                </button>
            </div>
            <label className="block">
                <span className="text-gray-700">First Name</span>
                <input
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
                    placeholder="Your first name"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Last Name</span>
                <input
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
                    placeholder="Your last name"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">E-mail</span>
                <input
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
                <span className="text-gray-700">Pre-existent pulmonary pathology:</span>
                <input
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
                    placeholder="e.g. larygintis, bronchic asthma etc."
                />
            </label>
        </div>
    </div>
}

export default UserProfile;