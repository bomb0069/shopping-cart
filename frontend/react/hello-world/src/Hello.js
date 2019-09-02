import React from 'react';

class Hello extends React.Component{
  word = "สวัสดีชาวโลก";

  render () {
    return (
      <div>{this.word}</div>
    );
  }
}

export default Hello;