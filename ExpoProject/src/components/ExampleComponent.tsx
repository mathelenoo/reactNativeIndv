import React from 'react';
import { View, Text } from 'react-native';
import { exampleStyles } from '../styles/exampleStyles';

const ExampleComponent: React.FC = () => {
  return (
    <View style={exampleStyles.container}>
      <Text style={exampleStyles.text}>Example Component</Text>
    </View>
  );
};

export default ExampleComponent;
