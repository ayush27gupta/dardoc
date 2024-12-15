import React from "react";
import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-message">Oops! Page Not Found</h2>
        <p className="not-found-description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="back-home-button">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
