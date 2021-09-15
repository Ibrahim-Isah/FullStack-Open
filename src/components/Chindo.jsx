import React, { Component } from 'react'

export default class Chindo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "",
             lastName: "",
             email: "",
             password: ""
        }
    } 
    render() {
        const {firstName, lastName , email , password} = this.state;
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(firstName, lastName, email, password)
            alert(`Good day ${firstName} ${lastName}, We have received your email ${email} and password ${password}`)
        }
        return (
            <div className="">
                <form onSubmit={handleSubmit} className="form-body" style={{display:"block", lineHeight:2}}>
                    <div className="">
                        <label htmlFor="firstname">FirstName:</label>
                        <input 
                        type="text" 
                        placeholder="First Name" 
                        value={this.state.firstName} 
                        onChange={(event) => {this.setState({
                            firstName: event.target.value
                        })}}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="lastname">LastName:</label>
                        <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={this.state.lastName}
                        onChange={(event) => {this.setState({
                            lastName: event.target.value
                        })}}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email: </label>
                        <input 
                        type="email" 
                        placeholder="email@example.com" 
                        value={this.state.email}
                        onChange={(event) => {this.setState({
                            email: event.target.value
                        })}}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={(event) => {this.setState({
                            password: event.target.value
                        })}}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
