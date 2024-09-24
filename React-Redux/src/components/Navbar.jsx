import React, { useState } from 'react';

const Navbar = () => {
  // State for managing dark/light theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('has-background-dark');
      document.body.classList.remove('has-background-light');
    } else {
      document.body.classList.add('has-background-light');
      document.body.classList.remove('has-background-dark');
    }
  };

  return (
    <>
      <div>
        <nav className={`navbar ${isDarkMode ? 'has-background-dark' : 'has-background-light'}`} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path remains unchanged */}
                <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908..." fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2" />
              </svg>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item is-selected">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>

                  {/* Theme Toggle Button */}
                  <button className="button is-link" onClick={toggleTheme}>
                    <span className="icon">
                      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </span>
                    <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
