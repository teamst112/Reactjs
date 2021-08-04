import React, { Component } from 'react'


class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillUnmount(){
        alert("Component unmount!");
    }
    render() { 
        return (
            <h3>Headerrrr!</h3>
        );
    }
}
 
export default Child;