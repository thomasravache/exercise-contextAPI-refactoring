import React, { useState } from 'react';
import trafficContext from '.';

function ContextProvider({ children }) {
  const [trafficLight, setTrafficLight] = useState('red');
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false });

  const moveCar = (car) => {
    setCars((prevState) => ({
      ...cars,
      [car]: !prevState[car],
    }))
  }

  const changeSignal = ({ target: { innerText } }) => {
    const buttonText = innerText.toLowerCase();

    setTrafficLight(buttonText);
  }

  const contextValue = {
    trafficLight,
    cars,
    functions: {
      moveCar,
      changeSignal,
    }
  }

  return (
    <trafficContext.Provider value={contextValue}>
      {children}
    </trafficContext.Provider>
  )
}

export default ContextProvider;
