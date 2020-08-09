import React, { Component } from 'react'
import './styles/App.scss'
import Todolist from './components/Todolist';
// hooks, use a functional component


class App extends Component {

  state = {
    text:'',
    todos:[
      {id: 1, value: 'apple'},
      {id: 2, value: 'milk'},
      {id: 3, value: 'eggs'}
    ] // Cannot push array item to state directly
  };
  // this.removeItem = this.removeItem.bind(this);
  // removeItem (index) {
  //   const itemsClone = [...this.state.items];
  //   itemsClone.splice(1)
  //   this.setState({ itemsClone })
  // }
  removeItem = (index) => {
    // const todos1 = this.state.todos.filter((todo, todoIndex) => {
    //   return todoIndex !== index
    // })
    // index = 1;
    // const todos1 = 'test'
    // this.setState({ todos1 })
    alert("clicked");
      this.setState({items: this.state.todos.filter(item => item.id === index )
      });
    console.log("check");
  }
  

  // handleDelete = () => {
  //   alert("Button Clicked!");
  // };
  removePeople(e){
    var array = this.state.todos;
    var index = array.indexOf(e.target.value); // Let's say it's Bob.
    delete array[index];
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text ==='') {
      alert('Please enter something');
    } else {
        this.setState({
          text: '',
          todos:  [...this.state.todos, this.state.text]
        })
    }
  }

  // onChange is required by the input field to fire off the users input
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    // console.log("added: " + e.target.value);
    return (
    <div className="row justify-content-center">
        <div className="">
          <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            

              <input 
                    placeholder="item..."
                    name="text"
                    type="text" 
                    className="form-control" 
                    aria-label="Default" 
                    aria-describedby="basic-addon2"
                    // onFocus={()=> "this.value=''"}
                    autoComplete="off"
                    value={this.state.text} 
                    onChange={this.onChange} 
                />

              <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="submit" value="Add">Submit</button>
              </div>
              
              {/* <input placeholder="add item" type="text" name="text" value={this.state.text} onChange={this.onChange}/> */}
              </div>

            
          </form>
          <Todolist todos={this.state.todos} removeItem={this.removeItem} />
        </div>
        
    </div>
  
    )
  }
}


export default App;
