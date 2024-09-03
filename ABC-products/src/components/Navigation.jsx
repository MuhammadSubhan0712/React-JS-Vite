import "./Navigation.css"

const Navigation = ()=>{
return(
    <>
    <div>
    <nav className="navbar">
      <div className="navbar-content">
        <a href="/" className="navbar-brand">
          <img src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="OLX Logo" className="navbar-logo" />
        </a>

        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for cars, mobile phones, and more..."
          />
          <button className="search-button">Search</button>
        </div>

        <ul className="navbar-menu">
          <li><a href="#login">Login</a></li>
          <li><a href="#favorites">My Favorites</a></li>
          <li><a href="#sell" className="sell-btn">Sell</a></li>
        </ul>
      </div>
    </nav>
    </div>
    </>
)
}

export default Navigation