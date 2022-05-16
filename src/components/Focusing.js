import React, { Component } from "react";

class Focusing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: 'Change this field'
    };
    this.inputElement = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.inputElement);
  }

  componentDidUpdate() {
    console.log("Focusing UPDATED");
  }

  handleChange(value) {
    console.log(value);
    this.setState({inputText: value});
  }

  showBox() {
    alert(this.state.inputText);
    this.inputElement.current.focus();
  }

  render() {
    return (
      <>
        <h1>Focusing</h1>
        <button onClick={this.showBox.bind(this)}>Show box</button>
        <label htmlFor="name"></label>
        <input 
          type="text" 
          defaultValue={this.state.inputText}
          ref={this.inputElement}
          onChange={(ev) => this.handleChange(ev.target.value)}
        />
      </>
    );
  }
}

export default Focusing;