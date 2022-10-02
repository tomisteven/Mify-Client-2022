import {configureStore} from '@reduxjs/toolkit';
import reducer from './combineReducers';

const store = configureStore({reducer});

 store.subscribe(() => {
    //console.log(store.getState());
    }
); 


export default store;