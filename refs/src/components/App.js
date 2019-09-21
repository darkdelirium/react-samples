import React, { Component } from "react";

class App extends Component {
  secondInput = React.createRef();

  handleForm = data => {
    data.preventDefault();
    console.log("input0 value: ", this.input.value);
    console.log("input1 value: ", this.secondInput.current.value);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={data => this.handleForm(data)}>
          <input
            type="text"
            defaultValue="text0"
            ref={input => (this.input = input)}
          />
          <input type="text" defaultValue="text1" ref={this.secondInput} />
          <button>Submit</button>
        </form>
        <p>Check console for results</p>
      </React.Fragment>
    );
  }
}

export default App;
