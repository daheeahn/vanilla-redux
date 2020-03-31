import {createStore} from 'redux';
import {createAction, createReducer} from '@reduxjs/toolkit';

// export const ADD_TODO = 'ADD_TODO';
// export const DELETE_TODO = 'DELETE_TODO';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
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

// const reducer = (state = [], action) => {
//   // state: currentState
//   switch (action.type) {
//     case addToDo.type:
//       const newToDoObj = {text: action.payload, id: Date.now()}; // payload로 정보가 온다. (관행)
//       return [newToDoObj, ...state];
//     case deleteToDo.type:
//       const cleaned = state.filter(s => s.id !== action.payload);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// Immer라고하는 것 아래서 리덕스 툴킷이 돌아가서 된다,,, 그래서 push로 Mutate해도 뒤에서는 [...state] 이거 해줄거야.
// switch case 이런거 없고, Mutate or Return new state obj 해도 되고~ 너무 좋다.
const reducer = createReducer([], {
  // state mutate도 쉬워져.
  [addToDo]: (state, action) => {
    const newToDo = {text: action.payload, id: Date.now()};
    state.push(newToDo); // createReducer는 이렇게 mutate해도 괜찮다!!!
    // *** mutate, not return!!!!!!!! // 뭔가를 return할 땐 꼭 새로은 state여야 해. push하면 그냥 Mutate 될 뿐이지!
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload), // *** or return new state
});

export const store = createStore(reducer);
export const actionCreators = {
  addToDo,
  deleteToDo,
};
