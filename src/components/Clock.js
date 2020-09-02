import React, { Component } from 'react'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <h2>It´s {this.state.date.toLocaleTimeString()}.</h2>
            </>
        )
    }
}

export default Clock