import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class PortalContainer extends Component {

  constructor(props) {
    super(props);
    this.element = document.createElement('div');
    this.outsideContainer = document.getElementById(this.props.idContainer);
  }

  componentDidMount() {
    this.outsideContainer.appendChild(this.element);
  }

  componentWillUnmount() {
    this.outsideContainer.removeChild(this.element);
  }

  render () {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}