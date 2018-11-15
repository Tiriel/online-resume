import React from "react";
import { getStackUser } from "../../utils/api";
import Widgets from "./Widgets";
import text from "./home.json";

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = { "stack": {}};
    }

    componentDidMount () {
        getStackUser().then((value) => {
            this.setState({ "stack": value.data.items[0] });
        });
    }

    render () {
        return (
            <section className="container home">
                <section className="home-title">
                    <article className="presentation">
                        <h1>Benjamin Zaslavsky</h1>
                        <h2>{text[this.props.locale].presentation.h2}</h2>
                        <h3>{text[this.props.locale].presentation.h3}</h3>
                    </article>
                    <article className="article">
                        <p>
                            {text[this.props.locale].article.p1}
                        </p>
                        <p>
                            {text[this.props.locale].article.p2}
                        </p>
                        <p>
                            {text[this.props.locale].article.p3}
                        </p>
                    </article>
                </section>
                <Widgets stack={this.state.stack} />
            </section>
        );
    }
}
export default Home;
