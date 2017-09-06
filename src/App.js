import React, { Component } from 'react';


var nums = [1,2,3,4,5,6,7,8,9,0]



var Screen = React.createClass({
  propTypes: {
    numString: React.PropTypes.string,
  },

  getInitialState: function() {
    return{
      numString: "0"
    }
  },

  render: function() {
    return (
      <p className="screen">{this.state.numString}</p>
    );
  },
});






var Total = React.createClass({
  propTypes: {
    totalNum: React.PropTypes.number,
  },

  getInitialState: function() {
    return{
      totalNum: 0
    }
  },

  render: function() {
    return (
      <h1 className="total">{this.state.totalNum}</h1>
    );
  }
});





var Numbers = React.createClass({
  addToScreen: function(e) {
    console.log('addToScreen', e);
  },

  render: function(props) {
    return (
      <div>
        <div className="buttonContainer">
          <button className="numButton" onClick={function() {this.onChange(1);}}>1</button>
          <button className="numButton" onClick={this.addToScreen}>2</button>
          <button className="numButton" onClick={this.addToScreen}>3</button>
        </div>
        <div className="buttonContainer">  
          <button className="numButton" onClick={this.addToScreen}>4</button>
          <button className="numButton" onClick={this.addToScreen}>5</button>
          <button className="numButton" onClick={this.addToScreen}>6</button>
        </div>
        <div className="buttonContainer">  
          <button className="numButton" onClick={this.addToScreen}>7</button>
          <button className="numButton" onClick={this.addToScreen}>8</button>
          <button className="numButton" onClick={this.addToScreen}>9</button>
        </div>
        <div className="buttonContainer">  
          <button className="numButton" onClick={this.addToScreen}>0</button>
        </div>
      </div>
    );
  },

  propTypes: {
    onChange: React.PropTypes.func,
  },
});




class App extends Component {
  render() {
    return (
      <div className="application">
        <Screen />
        <Total />
        <Numbers />
      </div>
    );
  }
}

export default App;
