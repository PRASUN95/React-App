import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Logout() {
    const HandleLogout = () => {
        console.log('logout')
        return <Redirect to = "/"/>
    }   
    return (
        <div className= "container">
            {/* <button onClick = {HandleLogout}>logout</button> */}
            <Link to="/">Logout</Link>
        </div>
    )
}

export default Logout
