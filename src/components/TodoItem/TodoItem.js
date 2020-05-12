import React, { Component } from 'react';
import './TodoItem.css';
import notCheckImg from '../../img/not-check.svg';
import checkedImg from '../../img/checked.svg';

class TodoItem extends Component {
    render() {
        var className = "TodoItem ";
        var checkImg = notCheckImg;
        const {item} = this.props;
        if(item.isComplete) {
            className += "CompleteItem";
            checkImg = checkedImg;
        }
        return (
            <div className={className}>
                <img src={checkImg} 
                    onClick={this.props.onClick}
                    height={32} width={32}
                    alt=""
                />
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;