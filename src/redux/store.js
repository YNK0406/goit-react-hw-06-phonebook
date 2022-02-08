import {createStore} from 'redux';
// import { configureStore } from '@reduxjs/toolkit';

const balState = {
   cal:null,
   balance:100,
}
const reducer = (
   state =balState, action) => { 
      if(action.type==='ADD_TO_CAL'){return {...state, balance:222,cal:'full'};}
      return state};

   const store = createStore(reducer); 
  
   export default store;
