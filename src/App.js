import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({currentEvent: e.type})
    }
    render() {
        return (
            <div>
                <textarea rows="10" cols="30" onKeyPress={this.update} onCopy={this.update}
                onCut={this.update} onPaste={this.update} onFocus={this.update} onBlur={this.update}
                onDoubleClick={this.update} onTouchStart={this.update} onTouchMove={this.update} onTouchEnd={this.update}
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default App