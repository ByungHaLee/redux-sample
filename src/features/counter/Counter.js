import React, { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';
import styles from './Counter.module.css';
import {connect} from "react-redux";

class Counter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      incrementAmount:2
    };
  }
  setIncrementAmount(value) {
    this.setState({incrementAmount:value})
  }
  render() {
    const {incrementAmount} = this.state
    const {count, increment, decrement, incrementByAmount, incrementAsync} = this.props
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => increment()}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}
          >
            -
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => this.setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              incrementByAmount(Number(incrementAmount) || 0)
            }
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => incrementAsync(Number(incrementAmount) || 0)}
          >
            Add Async
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { counter } = state
  const count = counter.value
  return { count }
}
export default connect(mapStateToProps,
    {
      decrement,
      increment,
      incrementByAmount,
      incrementAsync
    }
)(Counter)