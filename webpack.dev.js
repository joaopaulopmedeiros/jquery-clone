import path from "path";

module.exports = {
    mode: "development",
    entry: [
        "./src/js/index.js",
        "./src/scss/style.scss"
    ],
    devtool: "none",
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
}
