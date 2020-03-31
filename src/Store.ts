import {createStore} from 'redux';
import {createAction} from '@reduxjs/toolkit';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const addToDo = createAction(ADD_TODO);
const deleteToDo = createAction(DELETE_TODO);
// console.log(addToDo(), deleteToDo);

// actionCreator
// const addToDo = text => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// };
// const deleteToDo = id => {
//   return {
//     type: DELETE_TODO,
//     id,
//   };
// };

const reducer = (state = [], action) => {
  // state: currentState
  switch (action.type) {
    case addToDo.type:
      const newToDoObj = {text: action.payload, id: Date.now()}; // payload로 정보가 온다. (관행)
      return [newToDoObj, ...state];
    case deleteToDo.type:
      const cleaned = state.filter(s => s.id !== action.payload);
      return cleaned;
    default:
      return state;
  }
};

export const store = createStore(reducer);
export const actionCreators = {
  addToDo,
  deleteToDo,
};

const dispatchAddToDo = (text: string): void => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (id: number): void => {
  store.dispatch(deleteToDo(id));
};
