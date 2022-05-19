import React, { Component } from 'react';

const NameContext = React.createContext('pepe');
NameContext.displayName = "CoolNameShowed";

class App extends Component {
  render() {
    return (
      <NameContext.Provider value='pipo'>
        <Father></Father>
      </NameContext.Provider>
    );
  }
}

function Father() {
  return (
    <>
      <h1>I'm father.</h1>
      <Son></Son>
    </>
  );
}

function Son() {
  return (
    <NameContext.Consumer>
      {value => <p>My name is {value}</p>}
    </NameContext.Consumer>
  );
}

export default App;