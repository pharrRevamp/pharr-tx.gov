import React, { useState } from "react";
import pharrLogo2018 from "../assets/pharrLogo2018.png";
// import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="NavBar">
      <header>
        <img src={pharrLogo2018} alt="" />
        <nav>
          <div className="about">
            <a href="#.">About</a>
            <ul>
              <li>
                <a href="#.">Strategic Framework</a>
              </li>
              <li>
                <a href="#.">State Of The City</a>
              </li>
              <li>
                <a href="#.">City Government</a>
              </li>
              <li>
                <a href="#.">City Elections</a>
              </li>
              <li>
                <a href="#.">Fraud Reporting</a>
              </li>
              <li>
                <a href="#.">Fiscal Transparency</a>
              </li>
            </ul>
          </div>
          <div className="department">
            <a href="#.">Department</a>
            <ul>
              <li>
                <a href="#.">Department Directory</a>
              </li>
              <li>
                <a href="#.">Human Resources</a>
              </li>
              <li>
                <a href="#.">Grants Management and Community Devolpment</a>
              </li>
              <li>
                <a href="#.">Engineering</a>
              </li>
              <li>
                <a href="#.">Finance</a>
              </li>
              <li>
                <a href="#.">Innovation and Technology</a>
              </li>
              <li>
                <a href="#.">Office Of City Commnuication</a>
              </li>
              <li>
                <a href="#.">Municipal Court</a>
              </li>
              <li>
                <a href="#.">Pharr Memorial Library</a>
              </li>
              <li>
                <a href="#.">Pharr and Reynosa Intl Bridge</a>
              </li>
              <li>
                <a href="#.">Devolpment Services</a>
              </li>
              <li>
                <a href="#.">Parks and Recreation</a>
              </li>
              <li>
                <a href="#.">Pharr Event Center</a>
              </li>
              <li>
                <a href="#.">Public Utilities</a>
              </li>
              <li>
                <a href="#.">Public Works</a>
              </li>
              <li>
                <a href="#.">Purchasing</a>
              </li>
            </ul>
          </div>
          <div className="publicSafety">
            <a href="#.">Public Safety</a>
            <ul>
              <li>
                <a href="#.">Emergency Managment</a>
              </li>
              <li>
                <a href="#.">Fire Department</a>
              </li>
              <li>
                <a href="#.">Police Department</a>
              </li>
            </ul>
          </div>
          <div className="business">
            <a href="#.">Business</a>
            <ul>
              <li>
                <a href="#.">BSD Conditional Permits</a>
              </li>
              <li>
                <a href="#.">Main Street Program</a>
              </li>
              <li>
                <a href="#.">Housing Program</a>
              </li>
              <li>
                <a href="#.">Permits</a>
              </li>
              <li>
                <a href="#.">Revolving Loan Fund Program</a>
              </li>
            </ul>
          </div>

          <div className="quickAccess">
            <a href="#.">Quick Access</a>
            <ul>
              <li>
                <a href="#.">Building Pharr Permit Portal</a>
              </li>
              <li>
                <a href="#.">Pharr 311</a>
              </li>
              <li>
                <a href="#.">Job Opportunities</a>
              </li>
              <li>
                <a href="#.">Court Payment</a>
              </li>
              <li>
                <a href="#.">Utility Payment</a>
              </li>
              <li>
                <a href="#.">Property Taxes</a>
              </li>
              <li>
                <a href="#.">Bid Posting</a>
              </li>
              <li>
                <a href="#.">Vital Statistics</a>
              </li>
              <li>
                <a href="#.">Public Information Request</a>
              </li>
              <li>
                <a href="#.">Park and Recs Registration</a>
              </li>
              <li>
                <a href="#.">Map Online</a>
              </li>
              <li>
                <a href="#.">Document Center</a>
              </li>
              <li>
                <a href="#.">Pharr.life TV</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default NavBar;
