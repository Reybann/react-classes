import React from 'react';
import './firstClass.css'

interface FirstHookState {
  count: number;
}

class FirstHook extends React.Component<{}, FirstHookState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
  }

  handleAddition() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleSubtraction() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className='firstClassBox'>
        <h1>Counter: {count}</h1>
        <button onClick={this.handleAddition}>+</button>
        <button onClick={this.handleSubtraction}>-</button>
      </div>
    );
  }
}

export default FirstHook;
