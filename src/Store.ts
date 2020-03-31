import {Alert} from 'react-native';
import {createStore, compose, applyMiddleware} from 'redux';
import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// export const ADD_TODO = 'ADD_TODO';
// export const DELETE_TODO = 'DELETE_TODO';

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');
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
// const reducer = createReducer([], {
//   // state mutate도 쉬워져.
//   [addToDo]: (state, action) => {
//     console.log('😍', action);
//     const newToDo = {text: action.payload, id: Date.now()};
//     state.push(newToDo); // createReducer는 이렇게 mutate해도 괜찮다!!!
//     // *** mutate, not return!!!!!!!! // 뭔가를 return할 땐 꼭 새로은 state여야 해. push하면 그냥 Mutate 될 뿐이지!
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload), // *** or return new state
// });

const toDo = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newToDo = {text: action.payload, id: Date.now()};
      state.push(newToDo);
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

export const store = createStore(
  toDo.reducer,
  // https://medium.com/encored-technologies-engineering-data-science/react-native-%EB%94%94%EB%B2%84%EA%B9%85-%ED%99%98%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0-7e46bfe89f6
  // 따라서 devtool 설치
  composeWithDevTools(applyMiddleware(thunk)),
);
// console.log('aa', toDo.actions); // wow

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export const {add, remove} = toDo.actions;

export const addToDoAsync = text => {
  return async (dispatch, getState) => {
    try {
      console.log('thunk addToDoAsync');
      dispatch(add(text));
    } catch (e) {
      Alert.alert('addToDoAsync error', JSON.stringify(e));
    }
  };
};

export const deleteToDoAsync = id => {
  return async (dispatch, getState) => {
    try {
      console.log('thunk deleteToDoAsync');
      dispatch(remove(id));
    } catch (e) {
      Alert.alert('addToDoAsync error', JSON.stringify(e));
    }
  };
};
