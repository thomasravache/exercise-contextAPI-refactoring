// src/TrafficSignal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import trafficContext from './contextAPI';



const TrafficSignal = ({ signalColor, changeSignal }) => {
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

const mapStateToProps = (state) => ({
  signalColor: state.trafficReducer.signal.color
});

const mapDispatchToProps = { changeSignal };

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
