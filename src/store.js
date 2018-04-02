import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// import articles from './articles/articles.reducer';
// import login from './login/login.reducer';
// import register from './register/register.reducer';

// 1. Setup store to use middleware (thunk) to create API calls.
// 2. Add redux-logger to middleware.
const middleware = [thunk];
middleware.push(createLogger());

let store;
const rootReducer = combineReducers({
  appName: (state = {}) => state //,
  // articles,
  // login,
  // register
});
const initialState = {};

if (process.env.NODE_ENV === 'development') {
  // 1. Add redux dev tools (development mode only).
  // 2. Create store composed of reducers and middleware.
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  // 1. Create store composed of reducers and middleware.
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

export default store;
