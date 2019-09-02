import React from 'react';

class Hello extends React.Component {
  word = "สวัสดีชาวโลก";

  constructor(props) {
      super(props)
      this.state = {
          word : this.props.name
      }
  }

  componentDidMount() {
    fetch("/api/v1/hello/1")
      .then(res => res.json())
      .then(
        (result) => {
          if (result.title != null) {
           this.setState({
             word: result.title,
           });
          } else {
            this.setState({
              word: "ไม่มีชาวโลกคนนี้"   
            });    
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            word: "ชาวโลกไม่รู้จักเรา"
          });
        }
      )
  }

  render () {
    return (
      <div>{this.state.word}</div>
    );
  }
}

export default Hello;