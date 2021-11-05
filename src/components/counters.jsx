import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <button onClick = {this.props.onReset} className="btn m-1 btn-primary">Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter = {counter}
            onDecrement = {this.props.onDecrement}
            onIncrement = {this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
  
}

export default Counters;
