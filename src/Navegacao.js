import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/index.js';
import DetailsScreen from './screens/details/index.js';
import Contato from './screens/contato/index.js';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}
