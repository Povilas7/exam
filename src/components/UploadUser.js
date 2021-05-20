import React from 'react';
import {useState, useRef, useEffect} from "react"

function UploadUser() {
    const nameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState([])

    function submit(){
        const user = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:3001/upload', options)
            .then(res => res.json())
            .then(data => {
                setError(data.messages)
                console.log(data)
            })
    }

    return (
        <div>
            <h3>Vartotojo sukurimas</h3>
            <input type='text' placeholder="Vardas" ref={nameRef}/>
            <input type='number' placeholder="Amžius" ref={ageRef}/>
            <input type='text' placeholder="El.paštas" ref={emailRef}/>
            <input type='text' placeholder="Slaptažodis" ref={passwordRef}/>
            <div>
                <button onClick={submit}>Patvirtinti</button>
            </div>
            <p className="error">{error}</p>

        </div>
    );
}

export default UploadUser;