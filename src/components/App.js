import React from "react";

import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Routing from "../components/Routing";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeLocale = this.changeLocale.bind(this);
        this.state = { locale: "fr" };
    }

    changeLocale(locale) {
        this.setState({locale});
    }

    render() {
        return (
            <div className="body">
                <Helmet titleTemplate="%s - BenjaminZaslavsky.fr">
                    <meta charSet="utf-8" />
                    <title>Home</title>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/652258b75c.css"
                    />
                </Helmet>
                <Header locale={this.state.locale} changeLocale={this.changeLocale}/>
                <Routing locale={this.state.locale}/>
            </div>
        );
    }
}

export default App;
