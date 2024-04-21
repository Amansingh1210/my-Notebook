import React, { useContext } from 'react'
import alertValue from '../context/Alerts/Alertcontext'

function Alert() {
    const getalerts = useContext(alertValue)
    const { alert } = getalerts;
    return (
        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show mb-3`} role="alert">
            <strong>{alert.type}: </strong>{alert.message}
        </div>

    )
}

export default Alert