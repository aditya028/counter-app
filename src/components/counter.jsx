import React from "react";
class Counter extends React.Component {
  render() {
    return (
      <div className="container">

      <div className="row ">
        <div class="col-1">
          <span className={this.getBadgeClass()}>{this.formatzero()}</span>
        </div>

        <div class="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success  m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-primary  m-1"
            disabled = {this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger  m-1"
          >
            X
          </button>
        </div>
      </div>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-1 bg-";
    classes += this.props.counter.value === 0 ? "danger" : "primary";
    return classes;
  }

  formatzero() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
