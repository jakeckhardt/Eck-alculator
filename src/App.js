import React, { Component } from 'react';
import Display from './display';
import NumButton from './numButton';



class App extends Component {
  constructor() {
    super();
    this.state = {
      mathProb: "0",
      total: "0"
    }

    this.addNum = this.addNum.bind(this)
  }
  
  render() {
    return (
      <div className="container">
        <Display mathProb={this.state.mathProb} total={this.state.total} />
        <div className="buttonContainer">
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"9"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"8"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"7"} />
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"+"} />
        </div>
        <div className="buttonContainer">
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"6"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"5"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"4"} />
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"-"} />
        </div>
        <div className="buttonContainer">
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"3"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"2"} />
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"1"} />
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"*"} />
        </div>
        <div className="buttonContainer">
          <NumButton numClass={"numButton"} addNum={this.addNum} val={"0"} />
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"/"} />
        </div>
        <div className="buttonContainer">
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"CE"} />
          <NumButton numClass={"opButton"} addNum={this.addNum} val={"="} />
        </div>
      </div>
    );
  }

  addNum(e) {
    const val = e.target.value;
    const classId = e.target.className;
    const lastChar = this.state.mathProb.slice(-1);
    if (this.state.mathProb == "0" || this.state.mathProb == "error") {
      if (val != "CE" && val != "=" && val != "*" && val != "/") {
        this.setState({mathProb: this.state.mathProb = ""});
        this.setState({mathProb: this.state.mathProb += val});
      } else if (val == "CE") {
        this.setState({mathProb: this.state.mathProb = "0"});
        this.setState({total: this.state.total = "0"});
      }
    } else if (val == "CE") {
      this.setState({mathProb: this.state.mathProb = "0"});
      this.setState({total: this.state.total = "0"});
    } else if (val == "=") {
      if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/"){
        this.setState({mathProb: "error"});
        this.setState({total: this.state.total = "0"});
      } else {
        var totalNum = eval(this.state.mathProb).toString();
        this.setState({mathProb: this.state.total = totalNum});
      }
    } else if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
      if (val == "+" || val == "-" || val == "*" || val == "/") {
        this.setState({mathProb: this.state.mathProb.slice(0,-1) + val});
      } else {
        this.setState({mathProb: this.state.mathProb += val});
      }
    } else if (lastChar != "+" || lastChar != "-" || lastChar != "*" || lastChar != "/") {
      this.setState({mathProb: this.state.mathProb += val});
    }
  }
}

export default App;
