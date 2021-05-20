import React from 'react';
import {useState, useEffect, useRef} from "react"

function GetUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getAllUsers')
            .then(res => res.json())
            .then(data => {
                setUsers(data.allUsers)

            })
    },[])

    function deleteUser(e){
        let id = e.target.id
        fetch('http://localhost:3001/delete/'+id)
            .then(res => res.json())
            .then(data => {
                setUsers(data.allUsers)
            })
    }
    function update(e){
        let id = e.target.id
    }


    return (
        <div>
            <h1>Sąrašas</h1>
            <div className="d-flex">
                <div className="box">
                    <h3>Vardas</h3>
                </div>
                <div className="box">
                    <h3>Amžius</h3>
                </div>
                <div className="box">
                    <h3>El.paštas</h3>
                </div>
                <div className="box">
                    <h3>Slaptažodis</h3>
                </div>
            </div>
            {users.map((item, index) => <div key={index}  className="d-flex">
                <div className="box">
                    <h3>{item.name}</h3>
                </div>
                <div className="box">
                    <h3>{item.age}</h3>
                </div>
                <div className="box">
                    <h3>{item.email}</h3>

                </div>
                <div className="box d-flex jus-around">
                    <h3>{item.password}</h3>

                </div>
                <div>
                    <p className='delete' id={item._id} onClick={deleteUser}>Ištrinti</p>
                    <p className='delete' id={item._id} onClick={update}>Redaguoti</p>
                </div>
            </div>)}
            <div className="updateUser">
                <h3>Redaguoti</h3>
                <input type='text' placeholder="Vardas"/>
                <input type='number' placeholder="Amžius"/>
                <input type='text' placeholder="El.paštas"/>
                <input type='text' placeholder="Slaptažodis"/>
                <div>
                    <button>Redaguoti</button>
                </div>

            </div>
        </div>
    );
}

export default GetUsers;