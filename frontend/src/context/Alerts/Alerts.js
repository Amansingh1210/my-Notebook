import React from 'react'

export default function Alerts(props) {
    const alert ()=>{
        
    } (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}: </strong>{props.alert.message}
        </div>

    )
    return (
        <NoteContext.Provider value={}>
            {props.children}
        </NoteContext.Provider>
    )
}


