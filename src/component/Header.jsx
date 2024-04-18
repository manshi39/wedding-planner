import React from 'react';
import "../styles/Header.css";
import LoginPage from './LoginPage'; // Assuming the CSS file exists

function Header({ onLoginClick }) { // Optional prop for login button click handler
 
  return (
    <header className="header">
      <div className="header-content">
        <h1>WEDDING PLANNER</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">VENDORS</a></li>
            <li><a href="#">BANQUETS</a></li>
            <li>
              {/* Use an anchor tag (`<a>`) for SEO and potential future routing changes */}
              <a href="loginPage.js" onClick={LoginPage.js}>
                LOGIN
              </a>
            </li>
            <li><a href="#">SIGNUP</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
