import React from "react";
import lala from "./user-profile/user-pic-test.jpg";

import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isSubmitSoundModalOpened, changeSoundSubmitModalOpened] =
    React.useState(false);

  React.useEffect(() => {}, []);
  return (
    <div className="w-full">
      <Modal
        isOpened={isSubmitSoundModalOpened}
        setModalOpened={changeSoundSubmitModalOpened}
        modalTitle={"User profile"}
      >
        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
          edi e smart! ca obiectivele!
        </p> */}
        <div class="grid grid-cols-1 gap-6">
          <div class="block">
            <img
              src={lala}
              alt="Profile picture"
              class="inline mr-4 w-16 rounded-full"
            ></img>
            <button
              className="bg-emerald-500 bk-blue text-white active:bk-blue-tint font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              // onClick=
            >
              Select image
            </button>
          </div>
          <label class="block">
            <span class="text-gray-700">First Name</span>
            <input
              type="text"
              class="
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
          <label class="block">
            <span class="text-gray-700">Last Name</span>
            <input
              type="text"
              class="
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
          <label class="block">
            <span class="text-gray-700">E-mail</span>
            <input
              type="email"
              class="
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
          <label class="block">
            <span class="text-gray-700">Pre-existent pulmonary pathology:</span>
            <input
              type="text"
              class="
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
      </Modal>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => changeSoundSubmitModalOpened(true)}
      >
        Open regular modal
      </button>

      <div className="m-auto max-w-full px-8 bg-blue-600 md:px-12 md:bg-pink-600  lg:bg-red-700 lg:px-16 lg:max-w-screen-lg xl:bg-green-600 xl:max-w-screen-xl	xl:px-20 ">
        <h1>asdasd</h1>
      </div>
    </div>
  );
}

export default App;
