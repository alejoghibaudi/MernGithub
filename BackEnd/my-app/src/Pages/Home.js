import React from "react";
import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import FooterHome from '../Components/FooterHome';
import Navbar from '../Components/Navbar';
function Home() {
  return (
    <div className="container">
    <div className="row"> 
    <Navbar/>
    <Header/>
    <button>Boton con flecha</button>
    <div>
      <p>Want to build your own Mytinerary?</p>
    <FooterHome/>
    </div>
    <div>
    <Link to="/Home" className="link"><button>Home</button></Link>
    </div>
    </div>
    </div>
  )
}
export default Home; 
  