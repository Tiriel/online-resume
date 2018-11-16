import React from "react";
import MainMission from "../abstracts/MainMission";
import text from "./text.json";

class MainWynd extends React.Component {
    render() {
        return (
            <MainMission title={text[this.props.locale].MainWynd.title}>
                <dl>
                    <dt>
                        <strong>{text[this.props.locale].MainWynd.dt1}</strong>
                    </dt>
                    <dd>
                        <p>
                            {/*  eslint-disable-next-line max-len */}
                            {text[this.props.locale].MainWynd.dd1.map(val => (
                                <span>
                                    {val}
                                    <br />
                                </span>
                            )}
                        </p>
                        <em>{text[this.props.locale].MainWynd.em}</em>
                        <ul>
                            <li>Symfony 3.4, RabbitMQ</li>
                        </ul>
                    </dd>
                </dl>
            </MainMission>
        );
    }
}
export default MainWynd;
