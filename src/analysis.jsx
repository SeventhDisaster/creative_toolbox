import React from 'react';
import {getFilesize, getPixelXY, rgbToHex, sortByFrequency} from "./utils";

export class Analysis extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            preview: props.preview,
            image: null,
            dims:  [0, 0],
            details: null,
            colorSet: null
        }
    }

    updateImage = () => {
        let img = new Image();
        img.src = this.state.preview

        let context = document.createElement('canvas').getContext('2d')
        context.drawImage(img, 0, 0);
        let imageData = context.getImageData(0, 0, img.width, img.height)

        let pixels = [];
        for(let x = 0; x < img.width; x++) {
            for(let y = 0; y < img.height; y++) {
                let px = getPixelXY(imageData, x, y)
                let color = rgbToHex(px[0], px[1], px[2])
                pixels.push(color);
            }
        }

        let colorSet = sortByFrequency(pixels)


        this.setState({
            image: img,
            dims: [img.width, img.height],
            details: pixels,
            colorSet: colorSet
        })
    }

    componentDidMount() {
        this.updateImage();
    }

    generateColorList() {
        let colorDivs = []

        for(const color of this.state.colorSet) {
            let divStyle = {
                backgroundColor: color,
                height: "30px",
                padding: "2px 5px"
            }
            colorDivs.push(
                <div key={color} style={divStyle}>{color}</div>
            )
        }

        colorDivs.shift()

        return <div className={"color-list"}>
            {colorDivs}
        </div>
    }

    render() {
        console.log(this.state.image)
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


            <section>
                <p className={"title"}>Dimensions:</p>
                <p className={"value"}>{`${this.state.dims[0]} x ${this.state.dims[1]}`}</p>
            </section>
            <section>
                <p className={"title"}>Total Pixel Count:</p>
                <p className={"value"}>{`${this.state.dims[0] * this.state.dims[1]}`}</p>
            </section>

            <div className={"vsection"}>
                <p className={"title"}>Color Frequency (Most to Least):</p>
                {this.state.colorSet ?
                    this.generateColorList()
                    :
                    null
                }
            </div>
        </div>
    }
}

