import React, { Component } from "react";
import "./styles/App.scss";
var ReactCSSTransitionGroup = require("react-transition-group");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      items: ["apple", "orange", "pear"],
    };
    this.removeItem = this.removeItem.bind(this);
  }
  toggle() {
    this.setState({ active: !this.state.active });
  }

  removeItem(index) {
    this.setState({
      items: this.state.items.filter((element) => element !== index),
    });
    this.setState((prevState) => ({ active: !prevState.active }));
    console.log(index);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      alert("Please enter something");
    } else {
      this.setState({
        items: this.state.items.concat(this.state.text),
      });
      this.setState({
        text: "",
      });
    }
  };

  // onChange is required by the input field to fire off the users input
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // onChange = (e) => this.setState({
  //   text: ''
  // });

  render() {
    return (
      <div className="row justify-content-center">
        <div>
          <h1 className="form-title">React ToDo List</h1>
          <form onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
              <input
                placeholder="item..."
                name="text"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="basic-addon2"
                autoComplete="off"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "item...")}
                value={this.state.text}
                onChange={this.onChange}
              />

              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  value="Add"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="list--wrapper">
            <ul>
              {this.state.items
                .map((item) => (
                  <li
                    className="list--item"
                    onClick={() => {
                      this.removeItem(item);
                    }}
                    key={item}
                  >
                    {item}
                    <button type="button" className="close">
                      ×
                    </button>
                  </li>
                ))
                .reverse()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
