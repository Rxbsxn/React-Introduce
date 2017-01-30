import React from 'react';

class App extends React.Component {
    render() {
        // return <h1>Hi</h1>
        return React.createElement('h1', null, 'Hello EggHeads');
    }
}

export default App

// const App = () => <h1>Hello World!</h1> // second and shorter way to start react app