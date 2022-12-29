import React, { Component, createRef } from "react";
import '../styles/education.css';

class EducationalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            study: '',
            date: '',
            editInfo: true
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
        this.editInfo = this.editInfo.bind(this);

        this.schoolRef = createRef();
        this.studyRef = createRef();
        this.dateRef = createRef();
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
        this.schoolRef.current.textContent = this.state.school;
        this.studyRef.current.textContent = this.state.study;
        this.dateRef.current.textContent = this.state.date;
    }
    editInfo() {
        this.setState(() => ({
            editInfo: this.state.editInfo ? false : true,
        }));
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h2 class="info-header">Educational Information</h2>
                <label for="school" style={{ display: this.state.editInfo ? "block" : "none" }}>School</label>
                <input className="general-info" id="school" name="school" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="study" style={{ display: this.state.editInfo ? "block" : "none" }}>Study</label>
                <input className="general-info" id="study" name="study" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="date" style={{ display: this.state.editInfo ? "block" : "none" }}>Date</label>
                <input className="general-info" id="date" name="date" type="date" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>

                <ul style={{ display: this.state.editInfo ? "none" : "block" }}>
                    <li className="output-fields" ref={this.schoolRef}></li>
                    <li className="output-fields" ref={this.studyRef}></li>
                    <li className="output-fields " ref={this.dateRef}></li>
                </ul>

                <div>
                    <button type="submit" onClick={this.displayInfo}>Submit</button>
                    <button type="button" onClick={this.editInfo}>Edit</button>
                </div>
            </form>
        );

    }
}

export default EducationalInfo;