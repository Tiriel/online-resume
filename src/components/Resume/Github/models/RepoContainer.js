import React from "react";
import Repo from "./Repo";

class RepoContainer extends React.Component {
    render () {
        const repo = this.props.repo,
            barStyle = {
                width: 200,
                height: 20,
                border: "1px solid gainsboro",
                padding: 0
            },
            parts = [],
            lang = [],
            bar = <div style={barStyle}>{parts}</div>;
        let total = 0;
        repo.languages.edges.forEach((edge) => {
            total += edge.size;
        });
        repo.languages.edges.forEach((edge) => {
            let percent = Math.floor(edge.size * 100 / total);
            if ("ApacheConf" !== edge.node.name) {
                percent = percent < 1 ? 1 : percent;
            }
            parts.push(
                <div
                    key={edge.node.name}
                    style={{
                        display: "inline-block",
                        backgroundColor: edge.node.color,
                        height: 20,
                        "width": percent + "%",
                        margin: 0,
                        padding: 0
                    }}
                />
            );
            lang.push(
                <strong
                    style={{
                        color: edge.node.color
                    }}>
                    {edge.node.name}{" "}
                </strong>
            );
        });
        return <Repo repo={repo} bar={bar} lang={lang} />;
    }
}

export default RepoContainer;
