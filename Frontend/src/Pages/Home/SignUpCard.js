import React from "react";
import { Link } from "react-router-dom";
import "./SignUpCard.css"; // Import the CSS file for custom styles
import About from './About'

function SignUpCard() {
  return (
    <div>

    <About/>


      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card custom-card customer-card">
              <img
                className="card-img-top mx-auto mt-3 w-50"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="customer"
              />
              <div className="card-body">
                <h5 className="card-title"><b>Welcome Customer</b></h5>
                <p className="card-text">
                  "Discover a world of flavors and convenience! Sign up to start your culinary journey with us and indulge in delightful experiences."
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item custom-list-item">
                  <div className="dropdown">
                    <button className="btn btn-custom dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Customer
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item" to={"/customer/signin"}>Sign In</Link></li>
                      <li><Link className="dropdown-item" to={"/customer/signup"}>Sign Up</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card manager-card">
              <img
                className="card-img-top mx-auto mt-3 w-50"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922514.png"
                alt="restaurant manager"
              />
              <div className="card-body">
                <h5 className="card-title"><b>Welcome Restaurant Manager</b></h5>
                <p className="card-text">
                  "Join our platform to showcase your culinary creations. Manage your restaurant with ease and reach more customers."
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item custom-list-item">
                  <div className="dropdown">
                    <button className="btn btn-custom dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Restaurant Manager
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><Link className="dropdown-item" to={"/manager/signin"}>Sign In</Link></li>
                      <li><Link className="dropdown-item" to={"/manager/signup"}>Sign Up</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card delivery-card">
              <img
                className="card-img-top mx-auto mt-3 w-50"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922688.png"
                alt="delivery person"
              />
              <div className="card-body">
                <h5 className="card-title"><b>Welcome Delivery Person</b></h5>
                <p className="card-text">
                  "Be a part of our delivery team! Help bring happiness to our customers by delivering meals quickly and efficiently."
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item custom-list-item">
                  <div className="dropdown">
                    <button className="btn btn-custom dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                      Delivery Person
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton3">
                      <li><Link className="dropdown-item" to={"/dp/signin"}>Sign In</Link></li>
                      <li><Link className="dropdown-item" to={"/deliveryperson/signup"}>Sign Up</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
