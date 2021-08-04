import React from 'react';
import Child from './Child';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color:"red", show:true }
        console.log(props);
    }

    clearHeader=()=>{
        this.setState({show:false})
    }
    render() {
        let header;
        if(this.state.show){
            header=<Child/>;
        }
        return (
            <div>
                {header}
                <h4>My car name is {this.props.yourcolor.name}, your color is {this.props.yourcolor.color}</h4>
                <button onClick={this.clearHeader}>Clear header</button>
            </div>
         );
    }
}
 
export default Car;