import React from "react";
import PropTypes from "prop-types";

class MainCompany extends React.Component {
  render() {
    return (
      <article className="company">
        <h3>
          <i className="fa fa-folder fa-fw" />
          {this.props.title}
        </h3>
        <p className="company-loc">
          <i className="fa fa-location-arrow fa-fw" />
          {this.props.loc}
        </p>
        <p>{this.props.desc}</p>
        {this.props.children}
      </article>
    );
  }
}

MainCompany.propTypes = {
  title: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default MainCompany;
