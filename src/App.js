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
  }

  render() {
    return (
      <CarsContext.Provider value={this.state}>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
