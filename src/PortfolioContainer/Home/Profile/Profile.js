import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="http://www.facebook.com">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="http://www.facebook.com">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Shamil</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer",
                    3000,
                    "Mern Stack Dev",
                    3000,
                    "React Dev",
                    3000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me
            </button>
            <a href="Resume.pdf" download="Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
