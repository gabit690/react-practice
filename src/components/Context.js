import React from 'react';

const NameContext = React.createContext('pepe');
NameContext.displayName = "CoolNameShowed";

const App = () => {
  return (
    <NameContext.Provider value='pipo'>
      <Father></Father>
    </NameContext.Provider>
  );
}

const Father = () => {
  return (
    <>
      <h1>I'm father.</h1>
      <Son></Son>
    </>
  );
}

const Son = () => {
  return (
    <NameContext.Consumer>
      {value => <p>My name is {value}</p>}
    </NameContext.Consumer>
  );
}

export default App;
