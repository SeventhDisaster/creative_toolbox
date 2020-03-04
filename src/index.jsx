import React from "react";
import ReactDOM from "react-dom";
import {Toolbox} from "./toolbox";

const App = () => {
    return (
        <div id="app">
            <Toolbox config={localStorage.getItem("config") ? null : localStorage.getItem("config")}></Toolbox>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));