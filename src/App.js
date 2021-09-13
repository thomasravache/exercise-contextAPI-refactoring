import React, { useState } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import trafficContext from './contextAPI';

function App() {
  const [trafficLight, setTrafficLight ] = useState('red');
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false });

  const moveCar = (car) => {
    setCars((prevState) => ({
      ...cars,
      [car]: !prevState[car],
    }))
  }

  const contextValue = {
    trafficLight,
    cars,
    functions: {
      moveCar,
    }
  }

  return (
    <trafficContext.Provider value={contextValue}>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </trafficContext.Provider>
  );
}

export default App;
