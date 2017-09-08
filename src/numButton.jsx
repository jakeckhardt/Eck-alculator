import React from 'react'


const NumButton = (props) => {
  return (
    <button className={props.numClass} onClick={props.addNum} value={props.val}>{props.val}</button>
  );
}

NumButton.propTypes = {
  addNum: React.PropTypes.func.isRequired,
  val: React.PropTypes.string.isRequired,
  numClass: React.PropTypes.string.isRequired
}

export default NumButton