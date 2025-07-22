// Error404 page to show 404 Not Found error

import React from "react";
import { Link } from "react-router";

function Error404() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
export default Error404;
