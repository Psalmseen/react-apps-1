import React from "react";
import TodoItems from "./components/TodoItems";
import todosData from "./components/todosData";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this)
        
    }
    handleChange(id) {
        console.log(`the eleement with the id of ${id} has changed`); 
        const updatedTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                return{
                    ...todo,
                    "isCompleted": !todo.isCompleted
                }
            }
            return todo
        });

        console.log(this.state.todos);
        console.log( updatedTodo);

         this.setState(() =>{
             return {
                 todos: updatedTodo
             }
         })
    };
    render(){
        const TodoComponent = this.state.todos.map(todo => <TodoItems handleChange={this.handleChange} key={todo.id} item={todo}/>);

        return(
            <div className="todo-list">
               { TodoComponent}
            </div>
        )
    }
}

export default App