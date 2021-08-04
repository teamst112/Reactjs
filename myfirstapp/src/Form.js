import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age:null
        }
    }
    changeInput = (event) => {
        let key=event.target.name;
        let value=event.target.value;
        if(key=="age"){
            if(!Number(value)){
                this.setState({age: null});
                alert("Vui lòng nhập số");
            }
            else{
                this.setState({ [key]: value })
            }
        }
        else{
            this.setState({ [key]: value })
        }
        
    }
    submitForm=(event)=>{
        event.preventDefault();
        console.log(this.state.username)
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <h5>Vui lòng nhập tên: {this.state.username}, my age is {this.state.age}</h5>
                    <h4>Enter name:</h4>
                    <input
                        placeholder="user name..."
                        name='username'
                        onChange={this.changeInput}
                    />
                    <h4>Enter age:</h4>
                    <input
                        placeholder="age..."
                        name='age'
                        onChange={this.changeInput}
                        value={this.state.age}
                    />
                    <input type='submit'/>
                </div>
            </form>
        );
    }
}

export default Form;