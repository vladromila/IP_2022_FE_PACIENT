import React from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { useParams } from 'react-router';

let timer = null;

let RecordAudio = () => {
    let [state, changeState] = React.useState({ recordState: null, });
    let [recordedAudios, changeRecordedAudios] = React.useState([]);
    let [startDate, changeStartDate] = React.useState(null);
    let [currentLength, changeCurrentLength] = React.useState(0);
    let start = () => {
        if (recordedAudios.length == 4)
            alert("You can not add more than 4 recordings!");
        else {
            changeStartDate(new Date());
            timer = setTimeout(() => {
                stop();
                changeCurrentLength(0);
                changeStartDate(null);
            }, (20 - currentLength) * 1000)
            changeState({
                recordState: RecordState.START
            })
        }
    }

    let pause = () => {
        clearTimeout(timer);
        let secondsDifference = (new Date().getTime() - startDate.getTime()) / 1000;
        changeCurrentLength(secondsDifference);
        changeState({
            recordState: RecordState.PAUSE
        })
    }
    let stop = () => {
        changeState({
            recordState: RecordState.STOP
        })
    }
    function blobToFile(theBlob, fileName) {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        return new File([theBlob], fileName + Math.floor(Math.random() * 10000) + ".wav", { type: "audio/wav", lastModified: new Date().getTime() })
    }

    let onStop = (audioData) => {
        let file = blobToFile(audioData.blob, new Date().toISOString);
        changeRecordedAudios([...recordedAudios, file]);
    }
    let renderFileInputs = () => {
        let f = [0, 1, 2, 3];
        // recordedAudios.forEach(audio => {
        //     f.pop();
        // })
        return f.map((item, ind) => {
            return <div class="mb-3 w-96" key={ind
                //  + recordedAudios.length
            }>
                <input accept='audio/wav' onChange={e => {
                    if (e.target.files.length) {
                        let file = e.target.files[0];
                        file.url = URL.createObjectURL(file)
                        changeRecordedAudios([...recordedAudios, file]);
                    }
                    console.log(e.target.files[0]);
                }} class="form-control
                    mt-4
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" />
            </div>
        })

    }
    const [isBlocked, setIsBlocked] = React.useState(false);
    let { id } = useParams();

    let onSaveAudios = () => {
        console.log(recordedAudios);
        const url = new URL(
            "https://api.fiihealth.ro/api/recordings"
        );

        const headers = {
            "Authorization": `Bearer ${JSON.parse(localStorage.userData).token}`,
            "Accept": "application/json",
        };

        let body = new FormData();
        body.append('form_id', '1');
        body.append('type', 'shallow_cough');
        body.append('file', recordedAudios[0]);

        console.log(body);

        fetch(url, {
            method: "POST",
            headers,
            body,
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }


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
                        return <audio className='lg:w-1/2 mt-4' key={key} controls src={audio.url} />
                    })}
                </React.Fragment> : null}
            <div class="flex justify-center flex-col">
                {renderFileInputs()}
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-12 disable" onClick={onSaveAudios}>
                Add Audio Data
            </button>
        </div>
    </div>
}

export default RecordAudio;