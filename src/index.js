import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './cosmo-bootswatch-3.3.7.css';
import './index.css';
import {loadState, saveState} from './localStorage';
import reducers from './reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';
import Participants from "./components/Participants";
import Draw from "./components/Draw";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import NavLink from './components/NavLink';
import Reset from './components/Reset';

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();

const devtools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :  compose;

const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => {
    saveState(store.getState());
});

sagaMiddleware.run(sagas);

const style = {
    intimateZoneOver: {
        marginTop: '2em'
    }
};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <Reset />
                <ul className="nav nav-pills">
                    <NavLink to={"/Participants"}>Participants</NavLink>
                    <NavLink to={"/Drawing"}>Drawing</NavLink>
                </ul>
                <div className="row" style={style.intimateZoneOver}>
                    <Redirect from="/" exact to="/Participants"/>
                    <Route path="/Participants" component={Participants}/>
                    <Route path="/Drawing" component={Draw}/>
                </div>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
