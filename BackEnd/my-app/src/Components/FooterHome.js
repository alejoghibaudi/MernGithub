import React from 'react';
import {Link} from 'react-router-dom';

function FooterHome (){
    return(
        <ul>
        <Link to="/Login" className="link">Login</Link>
        <Link to="/Create" className="link">Create User</Link>
      </ul>
    )
}

export default FooterHome