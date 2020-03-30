import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {StackParamList} from '../../App';
import {ToDoIF} from '../interface';
import {actionCreators} from '../store';
import ToDo from '../components/ToDo';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background-color: green;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Text = styled.Text`
  color: ${({color}) => color || 'black'};
  font-weight: 500;
`;

const TextInput = styled.TextInput`
  background-color: lightgreen;
  width: 300px;
  height: 50px;
`;

interface Props {
  navigation: StackNavigationProp<StackParamList, 'First'>;
  state: ToDoIF[];
  addToDo: any; // TODO:
  deleteToDo: any; // TODO:
}

const First = (props: Props) => {
  const {navigation, state, addToDo, deleteToDo} = props;
  const [value, setValue] = useState('');

  console.log('props', props);

  const onChangeText = text => setValue(text);

  const createToDo = () => {
    addToDo(value);
    Keyboard.dismiss();
  };

  return (
    <Container>
      {state.map((toDo: ToDoIF) => (
        <ToDo
          {...toDo}
          key={toDo.id}
          goToSecond={() => navigation.navigate('Second', {id: toDo.id})}
        />
      ))}
      <TextInput value={value} onChangeText={onChangeText} />
      <Button onPress={createToDo}>
        <Text>Submit</Text>
      </Button>
    </Container>
  );
};

const mapStateToProps = state => {
  // ownProps가 2번째로 올 수 있지만 안써도 돼
  // own은 navigation 등의 원래 prop!
  console.log(state);
  return {state};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps 아주 유용.
  return {
    addToDo: (text: string) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(First); // connect는 컴포넌트로 가는 props에 추가될 수 있게 해
