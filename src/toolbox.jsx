import React from 'react';
import { ColorPicker } from './colorpicker';

export class Toolbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            configuration: this.props.config
        }
    }
    
    setConfig(config) {
        this.setState({
            configuration: config
        })
    }

    render() {
        return <>
            <ColorPicker></ColorPicker>
        </>
    }
}