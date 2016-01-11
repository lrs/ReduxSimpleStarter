import React from 'react';
import ReactDOM from 'react-dom';

// Create component that will produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Render component to the page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));
