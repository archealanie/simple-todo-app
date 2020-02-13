import React, { Component } from 'react';
import Todo from "./Todo"

class Todos extends Component{

    render() {
        const { todoList, newTask, onAdd, onChanges, onFinish, onDelete } = this.props
        return (
            <React.Fragment>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="input-group-text" onClick={onAdd}>Add</button>
                    </div>
                    <input type="text" className="form-control" value={newTask.task} onChange={ onChanges }/>
                </div>

                <ul className="list-group">
                    { todoList.map( (todo, index) =>
                        <Todo
                            key={index}
                            todo={todo}
                            onFinish={onFinish}
                            onDelete={onDelete}
                        />
                    ) }
                </ul>
            </React.Fragment>
        )
    }
}

export default Todos;