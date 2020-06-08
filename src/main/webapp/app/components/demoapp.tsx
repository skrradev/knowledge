import React, {Component} from "react";
import Counters from './counters'
import NavBar from "app/components/navbar";
import Counter from "app/components/counter";


export default class Demoapp extends React.Component {

  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 6},
      {id: 3, value: 6},
      {id: 4, value: 1}
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
  };

  handleDecrement = counter => {
    if(counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({ counters })
    }
  };


  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length}/>
        <main className="container">
          <Counters onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                    onDecrement={this.handleDecrement}
                    counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }

}
