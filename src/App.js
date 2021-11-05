import React from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class Apps extends React.Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounter={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onDelete={this.handledelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value === 0 ? 0 : counters[index].value-1;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((obj) => (obj.value = 0));
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handledelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default Apps;
