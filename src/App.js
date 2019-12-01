import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    clicked: false,
    index: 0,
    addElement: [],
    arr: ['a','b','c','d','e','f','g','h']
  }

  handleClick = (i) => {
    if(this.state.addElement.includes(i)){
        this.setState({
          clicked: false,
          addElement: this.state.addElement.filter(el => el !== i)
        });
    }
    else{
        this.setState({
          clicked: true,
          index: i,
          addElement: [...this.state.addElement, i]
        });
    }
    
    
  }
  render() {
    console.log(this.state.addElement);
    console.log(this.state.index);
    return (
      <div className='App'>
         <ul>
           {
             this.state.arr.map((el, i) => (
             <li key={i} className={this.state.addElement.includes(i) ? 'clicked':''} 
                  onClick={() => this.handleClick(i)}>{el}</li>
             ))
           }
         </ul>
      </div>
    )
  }
}
export default App;