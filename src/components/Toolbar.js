import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Toolbar() {
    return (
        <div className='toolbar d-flex jus-around'>
            <div><h1>Puslapis apie vartotojus</h1></div>
            <div className="d-flex jus-btw mt-20">
                <div className="link" >
                    <Link className="text" to="/home">Pagrindinis</Link>
                </div>
                <div className="link">
                    <Link className="text" to="/getallusers">Sąrašas</Link>
                </div>

            </div>
        </div>
    );
}

export default Toolbar;