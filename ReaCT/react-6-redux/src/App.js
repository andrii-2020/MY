
import {createStore} from "redux";
import {Provider} from 'react-redux'
import './App.css';
import Redux from "./redux/Redux";
import React from "react";

function App() {
    const initialState = {
        count: 0
    }

    const reducer = (state = initialState, action ) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            default:
                return state;
        }
    }

    const  store = createStore(reducer);

  return (
    <div>
        <Provider store={store}>
            <Redux/>
        </Provider>

    </div>
  );
}

export default App;
