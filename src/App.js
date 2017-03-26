import React, { Component } from 'react';
import Input from './components/Input';
import Result from './components/Result';
import {validate, parse, getDenom} from './lib';

class App extends Component {
  state = {
    denoms: [],
    inputClass: ''
  }

  handleEnter = (e) => {
    if(e.key === 'Enter') {
      const amount = e.target.value;
      const parsedAmount = parse(amount);

      if (validate(amount)) {
        this.setState({
          inputClass: 'valid',
          denoms: getDenom(parsedAmount)
        });
      } else {
        this.setState({ inputClass: 'invalid', denoms: [] })
      }
    }
  }

  render() {
    const { inputClass, denoms } = this.state;
    return (
      <div className="app">
        <h1>£ coins denomination</h1>
        <Input
          className={inputClass}
          onKeyPress={this.handleEnter}
        />
        <Result data={denoms} />
      </div>
    );
  }
}

export default App;
