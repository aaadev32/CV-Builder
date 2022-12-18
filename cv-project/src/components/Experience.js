import React, { Component } from "react";
import '../styles/experience.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            company: '',
            position: '',
            description: '',
            dateStart: '',
            dateEnd: ''
        };
    }

    render() {
        return (
            <ol> </ol>
        );

    }
}

export default Experience;