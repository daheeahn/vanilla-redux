import {createStore} from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// actionCreator
const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  // state: currentState
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = {text: action.text, id: Date.now()};
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter(s => s.id !== action.id);
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
