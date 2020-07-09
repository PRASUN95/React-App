import React from 'react'
import logo from '../logo.svg'

const logo_style = {
    float: 'left',
    width: '10px'
}
function Header() {
    return (
        <nav className="navbar navbar-dark App-bg-color">
            <div className="header-logo" style={logo_style}>
                <img src={logo} alt="Logo" width="80px" height="80px"/>
            </div>
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3">Welcome</span>
            </div>
        </nav>
    )
}


export default Header;