import React from 'react'
import { useHistory } from 'react-router-dom';

function Logout() {
    const history = useHistory();
    const HandleLogout = () => {
        localStorage.removeItem("LoginSession")
        history.push('/')
    }   
    return (
        <div className= "container">
            <button className = "btn btn-primary" onClick = {HandleLogout}>logout</button>
            {/* <Link to="/">Logout</Link> */}
        </div>
    )
}

export default Logout
