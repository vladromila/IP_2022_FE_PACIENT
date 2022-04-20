import React from "react";

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
        modalTitle={"Submit audio"}
      >
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          edi e smart! ca obiectivele!
        </p>
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
