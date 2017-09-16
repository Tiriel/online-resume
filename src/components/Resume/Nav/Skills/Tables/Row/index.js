import React from "react";

class Row extends React.Component {
  render() {
    let skill = this.props.skill,
      score = new Array(this.props.score).fill(
        <i className="fa fa-circle fa-fw" />
      ),
      rest = new Array(5 - score.length).fill(
        <i className="fa fa-circle-o fa-fw" />
      );
    return (
      <tr>
        <td>{skill}</td>
        <td>
          {score}
          {rest}
        </td>
      </tr>
    );
  }
}

export default Row;
