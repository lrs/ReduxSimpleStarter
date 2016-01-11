import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import { API_KEY } from '../config';

// Create component that will produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Render component to the page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));
