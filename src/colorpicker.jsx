import React from 'react';

export class ColorPicker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            slpX: 0, // Saturation Lighting Pointer Position X
            slpY: 0, // Saturation Lighting Pointer Postiion Y
            hpX: 0, // Saturation Lighting Pointer Position X
        }
    }

    placePointer = (e) => {
        e.preventDefault();
        let rect = e.target.getBoundingClientRect();
        let x = (e.clientX - rect.left) - 5;
        let y = (e.clientY - rect.top) - 5;
        this.setState({
            slpX: x,
            slpY: y
        })
    }

    render() {
        return <>
            <div id="hue-selector">
                <div id="hue-pointer">Content Here</div>
            </div>
            <div id="saturation-lighting-selector" onClick={this.placePointer}>
                <div id="saturation-lighting-pointer" style={{top: this.state.slpY, left: this.state.slpX}}></div>
            </div>
        </>
    }
} 