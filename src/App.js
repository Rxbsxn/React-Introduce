import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }
    update( e ){
        this.setState({txt: e.target.value})
    }
    render() {
        return (
            <div>
            <input type="text" onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
            </div>
        )
    }
}


export default App

// const App = () => <h1>Hello World!</h1> // second and shorter way to start react app