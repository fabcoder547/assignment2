import React, { Fragment } from "react";
import "../Css/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar({ isDisplay }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span ><i className="fa fa-bars"></i></span>
      </button>
      <a className="navbar-brand" href="#">
        <span>GOOD</span>P
      </a>

      <ul className="navbar-nav mr-auto firstnav">
        <li className="nav-item active">
          <Link to="/" className="nav-link"><img src="https://images.ctfassets.net/4f3rgqwzdznj/3wJqZCgrBOFEIWoHsOFofW/3dcb236ef364c96aa7e6fd5343c47fcf/Drud_Pill.svg" alt="Drug-Pill" class="pr-2 my-1" />Drug Savings</Link>
        </li>
        <li className="nav-item">
          <Link to="/doctors" className="nav-link"><img src="https://images.ctfassets.net/4f3rgqwzdznj/n58PZidnBUNMSPhc5axY9/c02d69f381d2fb58fd81db649d67b905/Doctor-bag.svg" alt="Doctor-bag" class="pr-2 my-1" /> Doctors Visit</Link>
        </li>


      </ul>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">


        <ul className="navbar-nav ml-auto">
          {isDisplay && (
            <Fragment>
              <li className="nav-item">
                <Link className="nav-link">
                  Mobile App
            </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link">
                  Discount Card
            </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  Help
            </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  Signin
            </Link>
              </li>
            </Fragment>
          )}
          {!isDisplay && (
            <Fragment>
              <li className="nav-item">
                <Link className="nav-link">
                  Discount Card
            </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  Support
            </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}
