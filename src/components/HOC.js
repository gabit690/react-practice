import React, { Component } from "react";

class InnerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: `I'm ${props.author} and we are in the year ${props.year}`
    };
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

function higherOrderComponent(WrappedComponent) {
  return (data) => class HOC extends Component {
    render() {
      HOC.displayName = `WithSubscription(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
      return <WrappedComponent author={data.author} year={data.year}/>;
    }
  }
}

export default higherOrderComponent(InnerComponent)({
  author: 'gabit',
  year: 2022
});