import React from 'react';

class App extends React.Component {
    render() {
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is the default txt"
}

export default App

// const App = () => <h1>Hello World!</h1> // second and shorter way to start react app