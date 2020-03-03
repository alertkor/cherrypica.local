import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import ReduxPromise from "redux-promise";
import reducers from './redux/reducers/';
import {Provider} from "react-redux";
import Routing from './Routing/';

try {
    const node = document.getElementById('app');
    let store = createStore(reducers, compose(applyMiddleware(ReduxPromise)));

    ReactDOM.render((
        <Provider store={store}>
            <Routing>
            </Routing>
        </Provider>
    ), node)
} catch (ex) {
    console.log('error occur', ex)
}
