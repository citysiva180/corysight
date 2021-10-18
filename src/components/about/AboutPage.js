import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Cory is an awesome instructor in pluralsight and this is dedicated to
        him!!! :-)
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn
      </Link>
    </div>
  );
}

export default AboutPage;
