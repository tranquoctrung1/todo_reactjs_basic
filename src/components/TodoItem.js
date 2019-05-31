/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {Component} from 'react';
import PropType from 'prop-types';

import classNames from 'classname';
import './todo.css';
import checkDone from '../img/check-Done.svg';
import check from '../img/check.svg';


class TodoItem extends Component {
    render()
    {
    const {item, onclick} = this.props;
    let className = 'TodoItem';
    var url = check;
    if(item.isDone)
    {
        url = checkDone
    }
        return (
            <li className={classNames(className,{'done': item.isDone})}>
                <img src={url} alt="" width={32} height={32}  onClick={onclick} />
               <p>{item.title} with {item.isDone.toString()}</p>
            </li>
        )
    }   
}

// prostype will help us to check properties of props in this component. For example in this component we got 2 variable into this.props
// item is object and onclick is a function
// in this situation if we don't have 1 of three properties we will got warning in console
// Sumary the propstype packet will help us to check true or false or require or not require properties in this component

TodoItem.PropType ={
    item: PropType.shape({
        isDone: PropType.bool.isRequired,
        title: PropType.string.isRequired
    }),
    onclick: PropType.func.isRequired,
}

export default TodoItem;