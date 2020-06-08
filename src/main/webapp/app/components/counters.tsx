import React, {Component} from "react";
import Counter from './counter'


export default class Counters extends React.Component <{ onIncrement: any, onDelete: any, onReset: any, onDecrement: any,counters: any }> {

  render() {

    const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

    return <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
      {counters.map(counter => <Counter
        onIncrement={onIncrement} counter={counter}
        onDelete={onDelete}
        onDecrement={onDecrement}
        key={counter.id}>
        <h4>Counter #{counter.id}</h4>
      </Counter>)}
    </div>
  }

}
