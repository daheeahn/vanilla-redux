import React from 'react';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../App';

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
  return (
    <Container>
      <Text>First</Text>
      <Button onPress={() => navigation.navigate('Second')}>
        <Text color="white">Go To Second</Text>
      </Button>
    </Container>
  );
};
