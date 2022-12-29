import React, { Component, createRef } from "react";
import '../styles/general.css';

class Generalinfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            clearText: '',
            editInfo: true
        };

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
        this.editInfo = this.editInfo.bind(this);

        this.nameRef = createRef();
        this.emailRef = createRef();
        this.phoneRef = createRef();
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
        this.nameRef.current.textContent = this.state.name;
        this.emailRef.current.textContent = this.state.email;
        this.phoneRef.current.textContent = this.state.phone;
    }
    editInfo() {
        this.setState(() => ({
            editInfo: this.state.editInfo ? false : true,
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 class="info-header">General Information</h2>
                <label for="name" style={{ display: this.state.editInfo ? "block" : "none" }}>Name</label>
                <input className="general-info" id="name" name="name" type="text" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="email" style={{ display: this.state.editInfo ? "block" : "none" }}>Email</label>
                <input className="general-info" id="email" name="email" type="email" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>
                <label for="phone" style={{ display: this.state.editInfo ? "block" : "none" }}>Phone Number</label>
                <input className="general-info" id="phone" name="phone" type="tel" onChange={this.handleChanges} style={{ display: this.state.editInfo ? "block" : "none" }}></input>

                <ul style={{ display: this.state.editInfo ? "none" : "block" }}>
                    <li className="output-fields" ref={this.nameRef}></li>
                    <li className="output-fields" ref={this.emailRef}></li>
                    <li className="output-fields" ref={this.phoneRef}></li>
                </ul>

                <div>
                    <button type="submit" onClick={this.displayInfo}>Submit</button>
                    <button type="button" onClick={this.editInfo}>Edit</button>
                </div>
            </form >
        );

    }
}

export default Generalinfo;