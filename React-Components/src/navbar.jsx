import React from "react"
import "./index.css"

function Navbar() {
    

    return(
        // <  <!-- Navbar -->
<>        <nav className="navbar">

        <div className="navbar-content">

            {/* <!-- Nike Logo --> */}

            <a href="#" className="navbar-brand">
                <img src="https://banner2.cleanpng.com/20240315/epa/transparent-nike-logo-nike-logo-in-blue-red-orange-1710835945246.webp" alt="Logo" className="navbar-logo"/>
                Nike
            </a>
    
            <ul className="navbar-menu">
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Air force</a></li>
                <li><a href="#">Running Shoes</a></li>
                <li><a href="#">Women's</a></li>
                <li><a href="#">Dunk</a></li>
            </ul>
         </div>
    </nav>

</>
    )
}

export default Navbar