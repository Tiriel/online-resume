import React from "react";
import Row from "./Row";

class TechTable extends React.Component {
    render () {
        return (
            <table>
                <tbody>
                    <Row skill="PHP" score={4} />
                    <Row skill="JavaScript" score={3} />
                    <Row skill="MySQL" score={3} />
                    <Row skill="MongoDB" score={2} />
                    <Row skill="ElasticSearch" score={3} />
                    <Row skill="RabbitMQ" score={2} />
                </tbody>
            </table>
        );
    }
}

export default TechTable;
