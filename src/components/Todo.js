import React from 'react';
import './Todo.css';


class Todo extends React.Component{
    // constructor(props){
    //     super(props);
    
    // }

    render(){
        return(
     <div className="Todo">

         <p style={{ textDecoration:this.props.todo.complete?"line-through":" "}}>{this.props.todo.title}</p>
        
         <div className="status">
         <button className="button1"
          onClick={()=>this.props.completetodo(this.props.todo.id)}>
          Complete 
          </button>
         <button className="button2" 
         onClick={()=>{this.props.delettodo(this.props.todo.id)}} >
             X
             </button>
         </div>
     
     
     </div>
        );
    }
}
export default Todo;