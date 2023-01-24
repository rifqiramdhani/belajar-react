import { Component } from 'react'



class ClassGreetingConstructor extends Component {
    
    constructor(props) {
        super(props);
        this.state = { Counter: 0 }
        this.decrement = this.decrement.bind(this)
    }
    
    increment = () =>{
        this.setState({Counter : this.state.Counter + 1})
    }
    
    decrement (){
        this.setState({Counter : this.state.Counter - 1})
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.Counter}</h1>
                <br></br>
                <button type="button" onClick={this.decrement}>-</button>
                <button type="button" onClick={this.increment}>+</button>
            </div>
        );
    }


}

export default ClassGreetingConstructor;