import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import ContextProvider from './contextAPI/ContextProvider';

function App() {


  return (
    <ContextProvider>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </ContextProvider>
  );
}

export default App;
