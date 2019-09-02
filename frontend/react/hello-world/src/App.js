import React from 'react';
import Hello from './Hello'
import './App.css';

class App extends React.Component{
  hello = "สวัสดีชาวโลก";

  render () {
    return (<Hello />);
  }
}

export default App;
