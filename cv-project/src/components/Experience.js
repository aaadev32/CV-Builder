import React, { Component, createRef } from "react";
import '../styles/experience.css';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            position: '',
            description: '',
            dateStart: '',
            dateEnd: '',
            editInfo: true
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
        this.editInfo = this.editInfo.bind(this);

        this.companyRef = createRef();
        this.positionRef = createRef();
        this.descriptionRef = createRef();
        this.dateStartRef = createRef();
        this.dateEndRef = createRef();
    }

    handleChanges(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(() => ({
            editInfo: this.state.editInfo = false,
        }));
    }
    displayInfo() {
        this.companyRef.current.textContent = this.state.company;
        this.positionRef.current.textContent = this.state.position;
        this.descriptionRef.current.textContent = this.state.description;
        this.dateStartRef.current.textContent = this.state.dateStart;
        this.dateEndRef.current.textContent = this.state.dateEnd;

    }
    editInfo() {
        this.setState(() => ({
            editInfo: this.state.editInfo ? false : true,
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 class="info-header">Experience Information</h2>
                <label for="company" style={{ display: this.state.editInfo ? "block" : "none" }}>Company</label>
                <input className="general-info" id="company" name="company" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="position" style={{ display: this.state.editInfo ? "block" : "none" }}>Position</label>
                <input className="general-info" id="position" name="position" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="description" style={{ display: this.state.editInfo ? "block" : "none" }}>Description</label>
                <input className="general-info" id="description" name="description" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="date-start" style={{ display: this.state.editInfo ? "block" : "none" }}>Start Date</label>
                <input className="general-info" id="date-start" name="dateStart" type="date" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="date-end" style={{ display: this.state.editInfo ? "block" : "none" }}>Date End</label>
                <input className="general-info" id="date-end" name="dateEnd" type="date" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>

                <ul style={{ display: this.state.editInfo ? "none" : "block" }}>
                    <li className="output-fields" ref={this.companyRef}></li>
                    <li className="output-fields" ref={this.positionRef}></li>
                    <li className="output-fields" ref={this.descriptionRef}></li>
                    <li className="output-fields" ref={this.dateStartRef}></li>
                    <li className="output-fields" ref={this.dateEndRef}></li>
                </ul>

                <div>
                    <button type="submit" onClick={this.displayInfo}>Submit</button>
                    <button type="button" onClick={this.editInfo}>Edit</button>
                </div>
            </form >
        );

    }
}

export default Experience;