import React from "react";
import "./TravelPage.css";
import construction from "./construction.jpg";
import drive from "./convention center.jpg";
import marriage from "./elecion.jpg";
import gorilla from "./gorilla.webp";
import TravelBookingForm from "./TravelForm";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

function TravelPage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  return (
    <div className="travel-page">
      {user ? (
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("token");
            setUser(null);
            navigate("/");
          }}
        >
          Logout
        </button>
      ) : null}
      <header className="header">
        <h1 className="title">Easy services</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a to="/destinations">Records</a>
            </li>
            <li className="nav-item">
              <a to="/packages">News</a>
            </li>
            <li className="nav-item">
              <a to="/about">Laws</a>
            </li>
            <li className="nav-item">
              <a to="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="hero-title">Find Services</h2>
          <p className="hero-description">
          Local Government Online Services. For the fastest growning city Kigali.
          </p>
          <a className="hero-button" onClick={() => navigate("/register")}>
            View Services
          </a>
        </section>

        <section className="destinations">
          <h2 className="section-title">Frequently Requested Services</h2>
          <ul className="destination-list">
            <li className="destination-item">
              <img src={construction}  className="destination-image" />
              <h3 className="destination-title">Building permit</h3>
            </li>
            <li className="destination-item">
              <img src={drive}  className="destination-image" />
              <h3 className="destination-title">Driving license</h3>
            </li>
            <li className="destination-item">
              <img src={marriage}  className="destination-image" />
              <h3 className="destination-title">Marriage permit</h3>
            </li>
          </ul>
        </section>

        <section className="packages">
          <h2 className="section-title">Government records</h2>
          <div className="package-item">
            <img
              src={gorilla}
              className="package-image"
            />
            <h3 className="package-title">13 MILLION in the last census.</h3>
            <p className="package-description">
            Census were conducted 2023 in August and came to a conclusion of 13 million  Rwandans.
            </p>
            <button className="package-button">Get Graphs</button>
          </div>
          <div className="package-item">
            <img
              src={marriage}
              className="package-image"
            />
            <h3 className="package-title">Elections</h3>
            <p className="package-description">
              H.E Paul Kagame was elected in 2017 and has been serving his term well ever since.
            </p>
            <button className="package-button"> More</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="copyright">
          &copy;  All rights reserved to   Govmanager
        </p>
      </footer>
    </div>
  );
}

export default TravelPage;
