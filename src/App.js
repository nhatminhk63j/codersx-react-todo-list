import React, { Component } from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoItems: [
        {title: 'Learn Japanese', isComplete: false},
        {title: 'Play soccer', isComplete: true},
        {title: 'Learn ReactJs on CodersX', isComplete: true}
      ]
    }

    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      console.log(item)
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const {todoItems} = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          {
            todoItems.map((item, index) => (
              <TodoItem
                item={item}
                key={index}
                onClick={this.onItemClicked(item)}
              />
            ))
          }
        </div>
      );
    }
  }
}

export default App;