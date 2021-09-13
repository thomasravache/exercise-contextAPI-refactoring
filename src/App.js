import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsContext from './contextAPI';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car) {
    this.setState((prevState) => ({
      [car]: !prevState[car]
    }));
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    };

    return (
      <CarsContext.Provider value={contextValue}>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
