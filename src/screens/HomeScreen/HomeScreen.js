import React from 'react';

let HomeScreen = () => {
    let [requests, changeRequests] = React.useState([]);
    React.useEffect(() => {
        const url = new URL(
            "https://api.fiihealth.ro/api/forms"
        );

        const headers = {
            "Authorization": `Bearer ${JSON.parse(localStorage.userData).token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers
        }).then(response => response.json())
            .then(res => {
                let toAddReqs = [];
                console.log(res);
                res.forEach(req => {
                    console.log(req.patient_id, JSON.parse(localStorage.userData).id)
                    if (req.patient_id == JSON.parse(localStorage.userData).id)
                        toAddReqs.push(req);
                })
                changeRequests(toAddReqs);
            })
    }, [])

    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }


    let renderRequests = () => {
        return requests.map(req => {
            return <div class="w-full block p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white self-center">Diagnosis Request #{req.id}</h5>
                <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white self-center">{formatDate(new Date(req.created_at))}</h6>

                <p class="font-normal text-gray-700 dark:text-gray-400">Symptoms: {req.symptoms}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Conditions: {req.conditions}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pre_existing_conditions: {req.pre_existing_conditions}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Ailments: {req.ailments}</p>

            </div>
        })
    }
    return <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 direction-col flex flex-col items-center justify-center">
        {renderRequests()};
    </div>
}

export default HomeScreen;