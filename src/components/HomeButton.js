import React from "react";
import MotionMenu from "react-motion-menu";
import { Link } from "react-router-dom";

class HomeButton extends React.Component {
  render() {
    return (
      <MotionMenu type="vertical" bumpy={false} x={10} y={10} margin={40}>
        <div className="button">
          <i className="fa fa-bars" />
        </div>
        <div className="button">
          <Link to="/">
            <i className="fa fa-home" />
          </Link>
        </div>
        <div className="button">
          <Link to="/resume">
            <i className="fa fa-file-text-o" />
          </Link>
        </div>
        <div className="button">
          <Link to="/resume/github">
            <i className="fa fa-github" />
          </Link>
        </div>
        <div className="button">
          <a href="http://benjaminzaslavsky.fr/static/cv-benjamin-zaslavsky.pdf">
            <i className="fa fa-file-pdf-o" />
          </a>
        </div>
      </MotionMenu>
    );
  }
}
export default HomeButton;
