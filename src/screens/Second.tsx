import React from 'react';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../App';
import {RouteProp} from '@react-navigation/native';
import connect from 'react-redux/lib/connect/connect';
import {ToDoIF} from '../interface';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

interface OwnProps {
  navigation: StackNavigationProp<StackParamList, 'Second'>;
  route: RouteProp<StackParamList, 'Second'>;
}

interface Props extends OwnProps {
  toDo: ToDoIF;
}

const Second = ({navigation, route, toDo}: Props) => {
  console.log('🐤', toDo);
  const date = new Date(toDo.id);
  return (
    <Container>
      <Text>{toDo.text}</Text>
      {/* <Text>Created At: {new Date(toDo.id)}</Text> */}
      <Text>Created At: {date.toString()}</Text>
    </Container>
  );
};

const mapStateToProps = (state, ownProps: OwnProps) => {
  const {id} = ownProps.route.params;
  console.log('😻', id);
  return {toDo: state.find((toDo: ToDoIF) => toDo.id === id)};
};

export default connect(mapStateToProps)(Second);
