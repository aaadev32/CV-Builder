import React, { Component } from "react";
import '../styles/general.css';

class GeneralInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: ''
        };
    }

    render() {
        return (
            <div></div>
        );
    
      }
}

export default GeneralInfo;