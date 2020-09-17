import { applyMiddleware, createStore, compose } from 'redux';
import Reducer from './Reducers/Index';
import CreateSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/Index';

export function ConfigureStore() {
    const SagaMiddleware = CreateSagaMiddleware();
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore( Reducer, composeEnhancers(
        applyMiddleware(SagaMiddleware)
    ))
    SagaMiddleware.run(rootSaga);
    return store;
}

export default ConfigureStore;