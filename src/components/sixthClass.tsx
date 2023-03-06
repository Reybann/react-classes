import React, { RefObject } from 'react';
import './sixthClass.css';

class SixthHook extends React.Component {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
      console.log(`Input value: ${this.inputRef.current.value}`);
    }
  }

  render() {
    return (
      <div className='sixthClassBox'>
        <h1>Sixth Hook</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default SixthHook;
