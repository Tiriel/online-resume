import React from "react";
import MainMission from "../abstracts/MainMission";
import text from "./text.json";

class MainParisien extends React.Component {
    render () {
        return (
            <MainMission title={text[this.props.locale].MainParisien.title}>
                <dl>
                    <dt>
                        {/*  eslint-disable-next-line max-len */}
                        <strong>{text[this.props.locale].MainParisien.dt1}</strong>
                    </dt>
                    <dd>
                        <p>
                            {/*  eslint-disable-next-line max-len */}
                            {text[this.props.locale].MainParisien.dd1.map((val) => <span>{val}<br/></span>)}
                        </p>
                        <em>{text[this.props.locale].MainParisien.em}</em>
                        <ul>
                            {/*  eslint-disable-next-line max-len */}
                            <li>Symfony 2.8, ElasticSearch, RabbitMQ, FFMpeg</li>
                        </ul>
                    </dd>
                    <br />
                    <dt>
                        {/*  eslint-disable-next-line max-len */}
                        <strong>{text[this.props.locale].MainParisien.dt2}</strong>
                    </dt>
                    <dd>
                        <p>
                            {/*  eslint-disable-next-line max-len */}
                            {text[this.props.locale].MainParisien.dd2.map((val) => <span>{val}<br /></span>)}
                        </p>
                    </dd>
                </dl>
            </MainMission>
        );
    }
}
export default MainParisien;
