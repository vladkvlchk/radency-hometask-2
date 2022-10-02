import React from 'react';
import './App.css';
import Table from './components/Table.jsx';

function App() {
  return (
    <div className="app">
      <Table type='main' />
      <Table type='summary' />
      <Table type='archive' />
    </div>
  );
}

export default App;