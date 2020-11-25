
import {connect} from 'react-redux'
import React from "react";

function Redux(props) {
    return (
        <div className="count">
            <button onClick={props.incCounter}>+</button>
            <span>{props.count}</span>
            <button onClick={props.decCounter}>-</button>
            <br/>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {count: state.count};
};

const incCounter = () => ({type: 'increment'});
const decCounter = () => ({type: 'decrement'});

export default connect(mapStateToProps, {incCounter, decCounter} )(Redux) ;
