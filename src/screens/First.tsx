import React, {useState} from 'react';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../../App';
import {countStore, ADD, MINUS} from '../Store';

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

interface Props {
  navigation: StackNavigationProp<StackParamList, 'First'>;
}

export default ({navigation}: Props) => {
  const count = countStore.getState();

  const handleAdd = () => {
    countStore.dispatch({type: ADD});
  };

  const handleMinus = () => {
    countStore.dispatch({type: MINUS});
  };

  return (
    <Container>
      <Text>{count}</Text>
      <Button onPress={handleAdd}>
        <Text color="white">Plus +</Text>
      </Button>
      <Button onPress={handleMinus}>
        <Text color="white">Minus -</Text>
      </Button>
    </Container>
  );
};
