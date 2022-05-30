import React from 'react';
import { Navigate } from 'react-router-dom';

let AuthScreen = () => {
    React.useEffect(() => {
        let userData = '{"' + decodeURI(window.location.search.substring(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}'
        console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        channgeRedirect(true);
    }, [])

    let [redirect, channgeRedirect] = React.useState(false);
    if (redirect === true)
        return <Navigate to="/" />
}
export default AuthScreen;