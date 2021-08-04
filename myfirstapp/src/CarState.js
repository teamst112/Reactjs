import React, { Component } from 'react'


class CarState extends Component {
    constructor(props) {
        console.log("1. Constructor");
        super(props);
        this.state = {
            name: 'Sirus'
        }
    }
    //mouting
    // static getDerivedStateFromProps(props,state){
    //     console.log("2. getDerivedStateFromProps");
    //     return {name:props.name};
    // }    
    componentDidMount(){
        console.log("3. componentDidMount");
        this.setState({name:"R6"});
    }
    shouldComponentUpdate(){
        console.log("5. shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("6. componentDidUpdate sau khi click update change");
        //alert("da update sang "+this.state.name);
    }
    changeCar=()=>{
        this.setState({name:"Satria"});
    }
    render() {
        return (
            <div>
                <h4 style={{ backgroundColor: 'purple', color: 'white', padding: 10 }}>My car is {this.state.name}</h4>
                <button onClick={this.changeCar}>Change car</button>
            </div>
        );
    }
}

export default CarState;