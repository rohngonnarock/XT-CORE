import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    total: 0,
    currency: [
      { key: "2000", value: 0 },
      { key: "500", value: 0 },
      { key: "200", value: 0 },
      { key: "100", value: 0 },
      { key: "50", value: 0 },
      { key: "20", value: 0 },
      { key: "10", value: 0 },
      { key: "5", value: 0 },
      { key: "2", value: 0 },
      { key: "1", value: 0 }
    ]
  };

  dispenser(amt, key, index = 0, sum = {}) {
    let value = key[index];
    let count = Math.floor(amt / value);
    sum[value] = count;
    index += 1;
    sum["total"] = sum["total"]
      ? sum["total"] + count
      : Math.floor(amt / value);
    if (parseInt(value) === 1) {
      return sum;
    }
    if (parseInt(amt) >= parseInt(value)) {
      return this.dispenser(amt % value, key, index, sum);
    }
    return this.dispenser(amt % value, key, index, sum);
  }

  handleSubmit(event) {
    if (!event.target["amount"].value || isNaN(event.target["amount"].value)) {
      alert("please enter a valid value");
      return false;
    }
    let keys = [];
    this.state.currency.forEach(({ key }) => keys.push(key));
    let result = this.dispenser(event.target["amount"].value, keys);
    this.setState({
      total: result["total"]
    });
    var newObj = [];
    keys.forEach(key => {
      newObj.push({
        key: key,
        value: result[key]
      });
    });
    this.setState({
      currency: newObj
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="main header">
          <h1>ATM Money Dispenser</h1>
        </header>
        <section className="main">
          <div className="container">
            <div className="left-container">
              <form id="inputForm" onSubmit={this.handleSubmit} noValidate>
                <h1 className="title">Welcome to ATM</h1>
                <label htmlFor="amount" className="left-label">
                  Enter the Amount
                </label>
                <input
                  className="input-decorator input-box"
                  required
                  pattern="[0-9]*"
                  name="amount"
                  id="amount"
                />
                <input
                  className="input-decorator input-btn"
                  type="submit"
                  value="Get Money"
                  id="getMoney"
                />
              </form>
            </div>
          </div>
          <div className="container right-container">
            <div className="bold">You will get following amount</div>
            {this.state.currency &&
              this.state.currency.map(itm => {
                return (
                  <div className="container p-10" key={itm.key}>
                    {`${itm.value} notes of Rs ${itm.key}`}
                  </div>
                );
              })}
            <div className="total bold">
              Total notes dispensed: {this.state.total}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
