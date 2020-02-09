import React, {Component} from 'react'

class ListTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id: 1, description : 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description : 'Learn PHP', done: false, targetDate: new Date()},
                {id: 3, description : 'Learn Ruby and rails', done: false, targetDate: new Date()},
                {id: 4, description : 'Learn MongoDB', done: false, targetDate: new Date()},
                {id: 5, description : 'Learn Angular', done: false, targetDate: new Date()},
                {id: 6, description : 'Learn Spring', done: false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return (
            <div> 
                <h1> List Todo </h1>
                <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        id
                                    </th>
                                    <th>
                                        description
                                    </th>
                                    <th>
                                        Done?
                                    </th>
                                    <th>
                                        Dead-Line
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                        
                                    {
                                        this.state.todos.map
                                        (
                                            todo => 
                                                    <tr key={todo.id}>
                                                        <td> {todo.id} </td>
                                                        <td> {todo.description} </td>
                                                        <td> {todo.done.toString()} </td>
                                                        <td> {todo.targetDate.toString()} </td>
                                                    </tr>
                                        )
                                    }
                        
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent