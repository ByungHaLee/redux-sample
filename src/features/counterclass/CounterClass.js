import React from 'react'
import { connect } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from '../counter/counterSlice';

class CounterClass extends React.Component {
    handleAddTodo = () => {
        this.props.increase(this.props.count)
    }
    render() {
        const { count } = this.props
        return (
            <div>
                {count}
                <button className="add-todo" onClick={this.props.increment}>
                    Add Todo
                </button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { counter } = state
    const count = counter.value
    return { count }
}
export default connect(mapStateToProps,
    { increment }
)(CounterClass)