import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.shoot=this.shoot.bind(this);
    }
    shoot(name, ev){
        console.log(name);
        console.log(ev);
    }
    render() {
        return (
            <div>
                <h3>Event nha bạn</h3>
                <button onClick={(ev)=>this.shoot("hehe",ev)}>Event</button>
            </div>

        );
    }
}

export default Event;