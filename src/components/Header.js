import React, { Component } from 'react';

class Header extends Component{
    render() {
        const { todoList } = this.props
        return (
            <div>
                <div className="container-fluid bg-primary text-center text-white p-5">
                    <h2 className="text-center">Simple Todo App</h2>
                    <h5><i>By:</i> Archeal</h5>
                </div>

                <div className="m-4 text-center">
                    Done <span className="badge badge-info">{ todoList.filter(todo => todo.done).length }</span> |
                    Remaining <span className="badge badge-danger">{ todoList.filter(todo => !todo.done).length }</span>
                </div>
            </div>
        )
    }
}

export default Header;