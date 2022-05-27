import {createStore, combineReducers, applyMiddleware, compose} from "redux";

// import {loginReducer} from "./Login/Reducer"

// import {classesssReducer} from "./Classesss/Reducer"
import { Masaireducer } from "./reducer"; 

import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const rootReducer = combineReducers({
    // login : loginReducer,
    // classesss : classesssReducer
    MasaiReducer: Masaireducer
});

export const store = createStore(rootReducer, enhancer);