import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

/*
El “configureStore” envuelve al “createStore” de Redux para proporcionar
configuraciones simplificadas, que son pasadas por parámetro envueltas en un 
objeto
*/ 