/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {Component} from 'react';
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
export default TodoItem;