import React from 'react';
import Logo1 from '../Img/Mytinerarylogo.jpg'
function Header(){
    return(
        <div>
        <img src={Logo1} className="App-logo" alt="logo" />
        <p>Find your perfect trip, designed by insiders who know and love their cities</p>
        <h3>Start Browsing</h3>
        </div>
    )
}

export default Header