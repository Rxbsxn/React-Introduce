import React, {Component, Children} from 'react';

class App extends Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>            
                <div className="childB"></div>
            </Parent>
        )  
    }
} 

class Parent extends Component {
    render()  {
            //First Method
        // let items = React.Children
        //     .map(this.props.children, child => child)
            //Second Method
        let items = Children
            .forEach(this.props.children, child => console
                .log(child.props.className))
            //Third Method working with only one child
        // let items = Children.only(this.props.children)
        console.log(items)
        return null
    }
}

export default App