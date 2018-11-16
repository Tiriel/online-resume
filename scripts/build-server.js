const chalk = require("chalk"),
    assetManifest = require("../build/client/asset-manifest.json");

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

if (!assetManifest) {
    console.log(
        chalk.red(
            "No asset-manifest.json found. " +
                "Did you run the build-client script?\n"
        )
    );
}
process.env.REACT_APP_ASSET_MANIFEST = JSON.stringify(assetManifest);
