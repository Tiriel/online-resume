import React from "react";
import { Link } from "react-router-dom";

class ProfileInfos extends React.Component {
  render() {
    return (
      <li>
        <ul className="fa-ul">
          <li>
            <i className="fa-li fa fa-envelope" aria-hidden="true" />{" "}
            benjamin.zaslavsky<i className="fa fa-at fa-fw" />gmail.com
          </li>
          <li>
            <i className="fa-li fa fa-info-circle" aria-hidden="true" />{" "}
            <Link to="/">www.benjaminzaslavsky.fr</Link>
          </li>
          <li>
            <i className="fa-li fa fa-file-text-o" aria-hidden="true" />{" "}
            <Link to="/resume">Curriculum Vitae</Link>
          </li>
          <li>
            <i className="fa-li fa fa-github" aria-hidden="true" />{" "}
            <Link to="/resume/github">https://github.com/Tiriel</Link>
          </li>
          <li>
            <i className="fa-li fa fa-location-arrow" aria-hidden="true" />{" "}
            Paris, France
          </li>
        </ul>
      </li>
    );
  }
}

export default ProfileInfos;
