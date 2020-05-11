import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        var className = "TodoItem ";
        const {item} = this.props;
        if(item.isComplete) className += "CompleteItem";
        return (
            <div className={className} onClick={this.props.onClick}>
                {item.title}
            </div>
        );
    }
}

export default TodoItem;