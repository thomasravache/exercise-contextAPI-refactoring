// src/TrafficSignal.jsx
import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import trafficContext from './contextAPI';

const TrafficSignal = () => {
  const renderSignal = (trafficLight) => {
  
    if (trafficLight === 'red') return redSignal;
    if (trafficLight === 'yellow') return yellowSignal;
    if (trafficLight === 'green') return greenSignal;
  };

  return (
    <trafficContext.Consumer>
      {
        ({ functions: { changeSignal }, trafficLight }) => (
          <div>
            <div className="button-container">
              <button onClick={ changeSignal } type="button">
                Red
              </button>
              <button onClick={ changeSignal } type="button">
                Yellow
              </button>
              <button onClick={ changeSignal } type="button">
                Green
              </button>
            </div>
            <img className="signal" src={renderSignal(trafficLight)} alt="" />
          </div>
        )
      }
    </trafficContext.Consumer>
  );
};

export default TrafficSignal;
