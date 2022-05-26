import React, { Component} from "react";

const InnerComponent = ({ author, year }) => {
  return <p>{`I'm ${author} and we are in the year ${year}`}</p>;
}

const higherOrderComponent = (WrappedComponent) => {
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
