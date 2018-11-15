import React from "react";
import Row from "./Row";

class FramTable extends React.Component {
    render () {
        return (
            <table>
                <tbody>
                    <Row skill="Symfony 2/3/4" score={4} />
                    <Row skill="NodeJS" score={3} />
                    <Row skill="ReactJS" score={2} />
                </tbody>
            </table>
        );
    }
}

export default FramTable;
