
import React from 'react';
import './tododform.css';
class Todoform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputtext:" "
        }
    }
  addtodo=(event)=>{
      event.preventDefault()
      this.props.addtodoform(this.state.inputtext);
      this.setState({inputtext:" "});

  }
    render(){
        return(
            <div className="todoform">
                <form onSubmit={this.addtodo}>
                <input
                 type="text" 
                 placeholder="enter you r text.."
                 value={this.state.inputtext}
                 onChange={(e)=>{this.setState({inputtext:e.target.value})}}
                />
                </form>
            </div>
        )
    }
}
export default Todoform;