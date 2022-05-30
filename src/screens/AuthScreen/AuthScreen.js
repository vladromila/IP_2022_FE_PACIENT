import React from 'react';
import { Navigate } from 'react-router-dom';

let AuthScreen = () => {
    React.useEffect(() => {
        let userData = JSON.parse('{"' + decodeURI(window.location.search.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}')
        localStorage.setItem("userData", JSON.stringify(userData));
        channgeRedirect(true);
    })
    let [redirect, channgeRedirect] = React.useState(false);
    if (redirect === true)
        return <Navigate to="/" />
}
export default AuthScreen;