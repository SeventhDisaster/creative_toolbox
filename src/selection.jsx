import React from 'react';
import {Analysis} from './analysis'

export class Selection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: null,
            filled: null,
            data: null
        }

        this.setPreview = this.setPreview.bind(this)
    }


    setImage = () => {
        this.setState({
            img: this.state.data
        })
    }

    setPreview(event) {
        console.log(event.target.files[0])
        this.setState({
            filled: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        })

        event.target.files = null
    }

    clearImage = () => {
        this.setState({
            filled: null,
            data: null
        })
    }

    render() {
        return <div className="container">
            { 
                this.state.img ?

                // Image has been selected / uploaded
                <Analysis
                    data={this.state.data}
                    preview={this.state.filled}/>

                :

                // No image has been selected or uploaded
                <div className="upload-field">
                    {this.state.filled ?
                    <div className={"upload-preview"}>
                        <p className={"preview-name"}>{this.state.data.name}</p>
                        <button id={"clear-image"} onClick={this.clearImage}>X</button>
                        <img className={"preview-img"} src={this.state.filled} alt={"Uploaded image preview"}/>
                    </div> : null }

                    <label className={"input file-button"} htmlFor={"fileupload"}>Upload image</label>
                    <input className={"file-upload"} onChange={this.setPreview} id="fileupload" type="file" size="60" placeholder="Upload an image" name="file" accept="image/png, image/jpeg" />
                    <p>or</p>
                    <input className={`input input-text ${this.state.filled ? "unavailable" : ""}`} type="url" placeholder="Insert an image URL"/>

                    <button className={`scan-btn ${!this.state.data ? "unavailable" : ""}`} onClick={this.setImage}>Scan</button>
                </div>
            }
        </div>
    }
}