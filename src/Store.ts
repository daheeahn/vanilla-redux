import {createStore} from 'redux';

export const ADD = 'ADD';
export const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  // count는 current야. 항상 0이 아니야.
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count + 1;
    default:
      return count;
  }
};

export const countStore = createStore(countModifier);

const onChange = () => {
  console.log(countStore.getState());
  // 그 때마다 useState?로 해야하나... 어케 홈에서 바뀌게 하는데?
};

countStore.subscribe(onChange);
