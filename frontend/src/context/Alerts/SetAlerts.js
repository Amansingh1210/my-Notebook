import React, { useState } from 'react'
import AlertContext from './Alertcontext';

function SetAlerts(props) {
    let [alert, setAlert] = useState(null);
    const showalert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }
    return (
        <AlertContext.Provider value={{ alert, showalert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default SetAlerts