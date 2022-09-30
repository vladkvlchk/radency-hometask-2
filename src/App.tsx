import React from 'react';
import Table from './components/Table';

function App() {
  return (
    <div className="m-auto w-auto flex-col">
      <Table type='main' />
      <Table type='summary' />
      <Table type='archive' />
    </div>
  );
}

export default App;