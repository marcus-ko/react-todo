import React, { Component } from 'react'
import './styles/App.scss'
// hooks, use a functional component


class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      text:'',
      items: ['apple', 'milk', 'yogurt']
    };
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(index){
    this.setState({
        items: this.state.items.filter(el => el !== index)
    })
  }

  // clearText() {
  //   return {
      
  //   }
  // }
  // clearInput () {
  //   this.setState(state => ({
  //     this.state.text
  //   }))
  // }




  onSubmit = e => {
    e.preventDefault();
    if (this.state.text ==='') {
      alert('Please enter something');
    } else {
        this.setState({
            items: this.state.items.concat(this.state.text),
            text: ''
        })
    }
  }

  // onChange is required by the input field to fire off the users input
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
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
                    autoComplete="off"
                    value={this.state.text} 
                    onChange={this.onChange} 
                />

                <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="submit" value="Add">Submit</button>
              </div>
              </div>

            
          </form>
          <div className="list--wrapper">
            <ul>
                {this.state.items.map(item => (
                    <li className="list--item" onClick={() => { this.removeTodo(item)}} key={item}>{item}</li>
                )).reverse()}
                </ul>
        </div>
        </div>



    </div>
  
    )
  }
}


export default App;
