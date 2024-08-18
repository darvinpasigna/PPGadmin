import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Sidebar = ({countPC}) => {
  return (
    <div className="side d-flex">
      <nav className="sidebar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid flex-column">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
            <br />
            <h5 style={{color: "white"}}>Inventory</h5>
            <li className="nav-item mb-2">
                  <Link className="add nav-link"  to="/addproduct">ADD PRODUCT</Link>
            </li>
            
              <li className="nav-item">
                    <Link className="nav-link" to="/PC">PC ({countPC}) </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Smart Phone</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Tablet</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Console Game</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
