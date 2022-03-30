// In App.js in a new project
import 'react-native-gesture-handler'
import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio'
import Formulario from './screens/Formulario'
import Principal from './screens/Principal'

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Principal" component={Principal} />
        <Drawer.Screen name="Formulario" component={Formulario} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;