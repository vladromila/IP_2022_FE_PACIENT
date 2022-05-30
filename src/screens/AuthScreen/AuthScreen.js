import React from 'react';
import { Navigate } from 'react-router-dom';

let AuthScreen = () => {
    React.useEffect(() => {
        let userData = '{"' + decodeURI(window.location.search.substring(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}'
        localStorage.setItem("userData", userData);
        channgeRedirect(true);
    }, [])

    let [redirect, channgeRedirect] = React.useState(false);
    if (redirect === true)
        return <Navigate to="/" />
}
export default AuthScreen;