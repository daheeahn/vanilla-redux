import React from 'react';
import styled from 'styled-components';
import {actionCreators, deleteToDoAsync} from '../store';
import {connect} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../App';

const ToDoButton = styled.TouchableOpacity``;

const DeleteButton = styled.TouchableOpacity`
  width: 50px;
  height: 20px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${({color}) => color || 'black'};
  font-weight: 500;
`;

interface Props {
  goToSecond: (id: number) => void;
  id: number;
  text: string;
  deleteToDo: any; //TODO:
}

const ToDo = ({goToSecond, id, text, deleteToDo}: Props) => {
  return (
    <>
      <ToDoButton onPress={goToSecond}>
        <Text key={id}>{text}</Text>
      </ToDoButton>
      <DeleteButton onPress={deleteToDo}>
        <Text>삭제</Text>
      </DeleteButton>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps 아주 유용.
  return {
    deleteToDo: () => dispatch(deleteToDoAsync(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo); // connect는 컴포넌트로 가는 props에 추가될 수 있게 해
