import React from "react";
import MainCompany from "../abstracts/MainCompany";
import MainWynd from "./MainWynd";
import MainMano from "./MainMano";
import text from "./text.json";

class MainSooyoos extends React.Component {
  render() {
    return (
      <MainCompany
        title={text[this.props.locale].MainSooyoos.title}
        loc={text[this.props.locale].MainSooyoos.loc}
        date={text[this.props.locale].MainSooyoos.date}
        desc={text[this.props.locale].MainSooyoos.desc}
      >
        <MainWynd locale={this.props.locale} />
        <MainMano locale={this.props.locale} />
      </MainCompany>
    );
  }
}

export default MainSooyoos;
