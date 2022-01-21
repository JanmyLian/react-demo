import React, { Component } from 'react';
class ClassComponent extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        this.setState({ number: 8 })
    }
    render() {
        const { number } = this.state
        return (
            <div>
                <span>{number}</span>
            </div>
        )
    }
};
export default ClassComponent;