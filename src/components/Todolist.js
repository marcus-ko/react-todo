import React, { Component } from 'react'

import '../styles/App.scss'
// Child Component


class Todolist extends Component {
    // constructor(props) {
    //     super(props);
    //     this.removeItem = this.removeItem.bind(this);
    // }
    render() {
        const { todos, index } = this.props;
        return (

            <div className="list--wrapper">
                <ul>
                {this.state.todos.map(item => (
                    <li className="list--item" key={item}>{item}</li>
                )).reverse()}
                </ul>
            </div>

    
        )
    }
}



export default Todolist;
