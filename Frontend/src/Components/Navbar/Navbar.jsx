import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            {/* <a className="navbar-brand " href="#">Restaurant</a> */}
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/table-booking">Table Booking</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/party-booking">Party Booking</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
