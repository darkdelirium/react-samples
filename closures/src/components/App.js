import React, { Component } from "react";

class App extends Component {
  counter() {
    let count = 0;
    this.counterIncrement = function() {
      count++;
    };
    this.getCount = function() {
      return count;
    };
  }

  render() {
    let counter1 = new this.counter();
    counter1.counterIncrement();
    counter1.counterIncrement();

    let counter2 = new this.counter();
    counter2.counterIncrement();

    console.log(
      "counter1 value: ",
      counter1.getCount(),
      "counter2 value: ",
      counter2.getCount()
    );
    return (
      <React.Fragment>
        <p>Check console for results</p>
        <ul>
          <p>Counter 1 called 2 times, Counter 2 called 1 time</p>
          <li>Counter 1 Value: {counter1.getCount()}</li>
          <li>Counter 2 Value: {counter2.getCount()}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
