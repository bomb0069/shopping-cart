import React from 'react';
import './App.css';

class App extends React.Component{
  hello = "สวัสดีชาวโลก";

  render () {
    return (
      <div>{this.hello}
      </div>
    );
  }
}

export default App;
