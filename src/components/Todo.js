import React, { Component } from "react";

class Todo extends Component{

    render() {
        const { todo, onFinish, onDelete } = this.props;
        return (
            <React.Fragment>
                <li className="list-group-item">
                    <input type="checkbox" className="mr-2" defaultChecked={todo.done} onChange={ () => onFinish(todo) }/>
                    <span style={this.handleStatus()}>{ todo.task }</span>
                    <span className="float-right text-danger" onClick={ () => onDelete(todo) } >
                        <i className="fa fa-trash"></i>
                    </span>
                </li>
            </React.Fragment>
        )
    }

    handleStatus = () => {
        const style = this.props.todo.done !== false ? "line-through" : "";
        return { textDecoration: style }
    }
}

export default Todo;