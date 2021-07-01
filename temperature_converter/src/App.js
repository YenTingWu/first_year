import React, { Component } from 'react';
import './App.css'


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

function toCelsius(temperature, scale) {
  if(scale === 'k') {
    return temperature - 273;
  } else {
    return (temperature - 32) * 5 / 9;
  }
}

function toFahrenheit(temperature, scale) {
  if(scale === 'c') {
    return (temperature * 9 / 5) + 32;
  } else {
    return ((temperature - 273) * 9 / 5) + 32 ;
  }
}

function toKelvin(temperature, scale) {
  if(scale === 'c') {
    return temperature - 273;
  } else {
    return (temperature - 305) * 5 / 9;
  }
}



function tryConvert( temperature, convert, scale ) {
    const input = parseFloat( temperature );
    if ( Number.isNaN( input ) ) {
      return '';
    }
    const output = convert( input, scale );
    const rounded = Math.round( output * 1000 ) / 1000;
    return rounded.toString();
}


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.props.onTemperatureChange( e.target.value ); 
    // lift the state up //
    // it's gonna be provided by Calculator //
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset className="container">
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}



class Calculator extends Component {
  constructor( props ) {
    super( props );
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature}, () => { console.log( this.state.scale, temperature )});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature}, () => { console.log( this.state.scale, temperature )})  
  }

  handleKelvinChange(temperature) {
    this.setState({scale: 'k', temperature}, () => { console.log( this.state.scale, temperature )});
  }


  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = 
            scale === 'f' ? 
              tryConvert( temperature, toCelsius, 'f' ) 
              : scale === 'k' ?
                tryConvert( temperature, toCelsius, 'k' ) 
                : temperature;
              
    const fahrenheit = 
            scale === 'c' ? 
              tryConvert( temperature, toFahrenheit, 'c' ) 
              : scale === 'k' ? 
                tryConvert( temperature, toFahrenheit, 'k' ) 
                : temperature;
    const kelvin = 
            scale === 'c' ? 
              tryConvert( temperature, toKelvin, 'c' )
              : scale === 'f' ?
                tryConvert( temperature, toKelvin, 'f')
                : temperature;

    return (
      <div>
        <h1>Temperature Converter</h1>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}




export default Calculator;

