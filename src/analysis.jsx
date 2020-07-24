import React from 'react';
import {getFilesize} from "./utils";

export class Analysis extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            preview: props.preview
        }
    }

    render() {
        console.log(this.state.data)
        return <div className="analysis-container">
            <h1>Image Data</h1>
            <section>
                <p className={"title"}>Filename:</p>
                <p className={"value"}>{this.state.data.name.substring(0, this.state.data.name.lastIndexOf('.'))}</p>
            </section>
            <section>
                <p className={"title"}>Filetype:</p>
                <p className={"value"}>{this.state.data.name.substring(this.state.data.name.lastIndexOf('.'))}</p>
            </section>
            <section>
                <p className={"title"}>Size:</p>
                <p className={"value"}>{getFilesize(this.state.data.size, true)}</p>
            </section>
            <section>
                <p className={"title"}>Last Modified:</p>
                <p className={"value"}>{this.state.data.lastModifiedDate.toString()}</p>
            </section>

            <div className={"upload-preview"}>
                <img className={"preview-img"} src={this.state.preview} alt={this.state.data.name}/>
            </div>
        </div>
    }
}

