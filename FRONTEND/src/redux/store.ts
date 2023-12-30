//combineReducers(reducers) The combineReducers helper function turns an object whose values are different "slice reducer" functions into a single combined reducer function you can pass to Redux Toolkit's configureStore (or the legacy createStore method). The resulting combined reducer calls every slice reducer any time an action is dispatched, and gathers their results into a single state object. This enables splitting up reducer logic into separate functions, each managing their own slice of the state independently.
import { combineReducers } from '@reduxjs/toolkit';
// function which encapsulates our store creation logic
import { configureStore } from '@reduxjs/toolkit';

import { ThunkAction, Action } from '@reduxjs/toolkit';
// Redux Persist takes your Redux state object and saves it to persisted storage
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// persistStore function, which ensures your redux state is saved to persisted storage whenever it changes.
import { persistStore } from 'redux-persist';

// persistReducer returns an enhanced reducer that wraps the rootReducer you pass in and will persist that reducer’s state according to the config you pass in. The reducers themselves are not persisted since they are just functions.
import { persistReducer } from 'redux-persist';
// import reductors
import cartSlice from '../redux/slices/cart/cartSlice';
import { productListSlice } from '../redux/slices/products/productListSlice';
import orderListSlice from '../redux/slices/orders/listSlice';
import productDetailsSlice from '../redux/slices//products/productDetailsSlice';
import loginSlice from '../redux/slices/users/loginSlice';
import userDetailsSlice from '../redux/slices/users/userDetailsSlice';
import userListSlice from '../redux/slices/users/userListSlice';
import userOrderSlice from '../redux/slices/orders/userOrderSlice';
import orderDetailSlice from '../redux/slices/orders/orderDetailSlice';
import productFilterSlice from '../redux/slices/products/productFilterSlice';
import counterReducer from '../redux/slices/counter/counterSlice';
import { authorizationProvider } from '../utils/auth-axios';
// I also included the Thunk middleware, which will intercept and stop non-serializable values in action before they get to the reducer.
import thunk from 'redux-thunk';

// If we have two or more reducers in Redux Toolkit, like userReducer and notesReducer, and we want to add them to our store, we’ll likely configure the store as follows:

/*const store = configureStore({
    reducer: {
      user: userReducer,
      notes: notesReducer
    },
  })
  
  We can also use combineReducers as follows, which does the same thing:
  
  const rootReducer = combineReducers({ 
    user: userReducer,
    notes: NotesReducer
  })*/

const reducers = combineReducers({
  productList: productListSlice.reducer,
  cart: cartSlice.reducer,
  productDetail: productDetailsSlice.reducer,
  productFilter: productFilterSlice.reducer,
  //auth
  login: loginSlice.reducer,
  userDetails: userDetailsSlice.reducer,
  userList: userListSlice.reducer,
  //orders
  orders: orderListSlice.reducer,
  userOrder: userOrderSlice.reducer,
  orderDetail: orderDetailSlice.reducer,
  // counter
  counter: counterReducer,
});

// redux-persist config
const persistConfig = {
  key: 'root',
  storage,
};
// persistedReducer, which is an enhanced reducer with configuration to persist the reducers states to local storage, Aside from local storage, we can also use other storage engines like sessionStorage and Redux Persist Cookie Storage Adapter.

// To use Redux Persist in this case, we’ll supply reducers as a parameter of persistReducer, then replace reducers in our store with the persisted reducer as follows:
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // persistedReducer cobines persistConfig and reducers
  reducer: persistedReducer,
  // I also included the Thunk middleware, which will intercept and stop non-serializable values in action before they get to the reducer. When using Redux Persist without using the Thunk middleware, we‘d get an error in the browser’s console reading a non-serializable value was detected in the state.
  // A thunk is a function used to delay a computation until it is needed by an application. The term thunk comes from a play on the word “think” but in the past tense.
  // Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
  middleware: [thunk],
  /*(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),*/
});
// we passed our store as a parameter to persistStore, which is the function that persists and rehydrates the state. With this function, our store will be saved to the local storage, and even after a browser refresh, our data will still remain.
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

authorizationProvider(store);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

