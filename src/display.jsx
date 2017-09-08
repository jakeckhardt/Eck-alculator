import React, { Component } from 'react'


const Display = (props) => {
  return (
    <div>
      <p className="screen">{props.mathProb}</p>
      <h1 className="total">{props.total}</h1>
    </div>
  );
}

Display.propTypes = {
  mathProb: React.PropTypes.string.isRequired,
  total: React.PropTypes.string.isRequired
}

export default Display