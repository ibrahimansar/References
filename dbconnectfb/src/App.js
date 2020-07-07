import React from 'react';
import Dbpost from './component/dbpost';
import Dbget from './component/dbget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dbpost />
      <Dbget />
    </div>
  );
}

export default App;