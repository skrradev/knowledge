import React, {Component} from 'react';

class Counter extends React.Component<{ counter: any, onDelete: any, onIncrement: any, onDecrement: any }> {

  /*  state = {
      value: this.props.value,
      imageUrl: 'https://picsum.photos/200',
      tags: ['tag1', 'tag2', 'tag3']
    };*/

  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  };


  /*  handleIncrement = () => {
      this.setState({value: this.state.value + 1})
    };*/


  render() {

    const isDecrementButtonDisabled = this.props.counter.value === 0;

    return <div className="row">
      <div className="col-1"><span className={this.getBadgeClasses()}>{this.formatCount()}</span></div>
      <div className="col">
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">+
        </button>
        <button disabled={isDecrementButtonDisabled} onClick={() => this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2">-
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">X
        </button>
      </div>
    </div>
  }

  /*
     renderTags() {
      return <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>;
    }
  */


  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

}

export default Counter;
