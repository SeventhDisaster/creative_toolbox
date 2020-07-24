import React from "react";
import ReactDOM from "react-dom";
import {Selection} from "./selection";

const App = () => {
    return (
        <div id="app">
            <h1 className={"fp-title"}>Imagine</h1>
            <p className={"fp-desc"}>A tool to display information about images</p>
            <Selection/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));