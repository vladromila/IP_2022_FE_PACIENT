import React from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

let RecordAudio = () => {
    let [state, changeState] = React.useState({ recordState: null, });
    let [recordedAudios, changeRecordedAudios] = React.useState([]);

    let start = () => {
        changeState({
            recordState: RecordState.START
        })
    }

    let pause = () => {
        changeState({
            recordState: RecordState.PAUSE
        })
    }
    let stop = () => {
        changeState({
            recordState: RecordState.STOP
        })
    }

    let onStop = (audioData) => {
        changeRecordedAudios([...recordedAudios, audioData]);
    }

    const [isBlocked, setIsBlocked] = React.useState(false);



    return <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 direction-col flex flex-col">
        <div className="flex jutify-center flex-col items-center">
            <div className="relative">
                <h1 className="centered-text ">Waiting for audio input...</h1>
                <AudioReactRecorder state={state.recordState} onStop={onStop} backgroundColor="#ffffff" />
            </div>
            <div className="flex jutify-center flex-row items-center">
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => start()}
                >
                    Start
                </button>
                <button
                    className="bg-emerald-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => pause()}
                >
                    Pause
                </button>
                <button
                    className="bg-red-500 py-3  rounded text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => stop()}
                >
                    Stop
                </button>
            </div>
            {recordedAudios.length > 0 ?
                <React.Fragment>
                    <h3 className="text-3xl font-semibold mb-5 mt-5">Recorded Audios:</h3>
                    {recordedAudios.map((audio, key) => {
                        return <audio className='lg:w-1/2' key={key} controls src={audio.url} />
                    })}
                </React.Fragment> : null}
        </div>
    </div>
}

export default RecordAudio;