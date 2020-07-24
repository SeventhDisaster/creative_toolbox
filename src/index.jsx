import React from "react";
import ReactDOM from "react-dom";
import {Selection} from "./selection";

const App = () => {
    return (
        <div id="app">
            <Selection>

            </Selection>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));