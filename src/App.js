import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';

class App extends Component{

    constructor() {
        super();
        this.state = {
            test:"",
            newTask: {
                task:"",
                done: false
            },
            todoList: [
                { id: 1, task:"Make Coffee", done: true },
                { id: 2, task:"Cook Breakfast", done: false },
                { id: 3, task:"Prepare for work", done: false }
            ]
        }
        this.handleChanges = this.handleChanges.bind(this);
    }

    doAddTask = () => {
        const { task } = this.state.newTask
        const newTask = this.state.newTask

        if(task === "") {
            return
        }

        this.setState({ todoList: [...this.state.todoList, newTask] })
        this.setState(prevState => ({
            newTask: {
                task:"",
                done: false
            }
        }))
    }

    doDeleteTask = ( todo ) => {
        const { todoList } = this.state
        const taskIndex = todoList.indexOf(todo)
        this.setState({ todoList: todoList.filter( (task, index) => {
                return index !== taskIndex
            })
        })
    }

    doFinishTask = (task) => {
        const todoList = [...this.state.todoList]
        const index = todoList.indexOf(task);
        todoList[index].done = !todoList[index].done;

        this.setState({ todoList })
    }

    handleChanges = ( event ) => {
        const taskVal = event.target.value
        this.setState((prevState) => ({
            newTask: {
                ...prevState.newTask,
                task: taskVal
            }
        }))
    }

  render() {
    return (
        <React.Fragment>
            <Header todoList={this.state.todoList}/>
            <div className="container mt-3">
                <Todos
                    newTask={this.state.newTask}
                    todoList={this.state.todoList}
                    onAdd={this.doAddTask}
                    onChanges={this.handleChanges}
                    onFinish={this.doFinishTask}
                    onDelete={this.doDeleteTask}
                />
            </div>
        </React.Fragment>
    )
  }
}

export default App;
