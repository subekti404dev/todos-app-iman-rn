
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/Home';
import AddScreen from './src/screens/Add';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"Add"} component={AddScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
