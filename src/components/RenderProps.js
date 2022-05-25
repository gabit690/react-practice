import React, { Component } from "react";

import catPhoto from './assets/cat.png';

class Cat extends Component {
    render() {
    const position = this.props.position;
    return <>
      <h1>Watch out with Nyan Cat</h1>
      <img src={catPhoto} alt="Nyan cat figure" style={{ position: 'absolute', left: position.x - 75, top: position.y - 10 }}/>
    </>
  }
}

class Position extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0};
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Human extends Component {
  render() {
    return <>
      <Position render={data => (<Cat position={data} />)}/>
    </>
  }
}


export default Human;