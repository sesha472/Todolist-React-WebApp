import React from 'react';
import './App.css';

import Todo from './components/Todo.js';
import Todoform from './components/Todoform.js';
   

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    todos:[ {id:1, title:"todo1..",complete:false},
     {id:2, title:"todo2..",complete:false},
 ],

}

  }

completetodoapp=(ide)=>{
  let todos=[...this.state.todos];
  todos.filter(item=>{
    if(item.id===ide){
      item.complete=true
    }
  });
 this.setState({todos})
}

delttodoapp=(ide)=>{
  let todos=[...this.state.todos];
  todos.filter((item,index)=>{
    if(item.id===ide){
      todos.splice(index,1);
    }
  });
  this.setState({todos})
}
addtodoapp=(text)=>{
		console.log(text);

    let todos=[...this.state.todos];
    let ide =todos[todos.length-1]?todos[todos.length-1]["id"]+1:0
  let newtodo={
    id:ide,
   title:text,
   complete:false
  }
  todos.push(newtodo)
  this.setState({todos:todos});

  }

  render(){
    return(
      <div className="App">
        <h1>TODO LIST MANAGEMENT </h1>
        <div className="todotexts">
        {this.state.todos.map(item=>(
        <Todo 
         todo={item}
         key={item.id}
         completetodo={(id)=>{this.completetodoapp(id)}}
         delettodo={(id)=>{this.delttodoapp(id)}}
         />
        ))
         }
         </div>
         <Todoform addtodoform={(todo)=>this.addtodoapp(todo)}/>
       
      </div>
    );
  };

}


export default App;