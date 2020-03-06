import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        addAlgarism: 10,
        subtractAlgarism: 8
    }

    
    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementeCounter}  />
                <CounterControl label={"Add "+this.state.addAlgarism} clicked={() => this.props.add( this.state.addAlgarism )}  />
                <CounterControl label={"Subtract "+this.state.subtractAlgarism} clicked={() => this.props.subtract( this.state.subtractAlgarism )}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(res => (<li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementeCounter: () => dispatch({type: actionTypes.DECREMENT}),
        add: (value) => dispatch({type: actionTypes.ADD, value}),
        subtract: (value) => dispatch({type: actionTypes.SUBTRACT, value}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);