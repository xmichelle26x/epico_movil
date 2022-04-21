import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard'
import BecasDisponibles from '../screens/BecasDisponibles'
import BecasInscritas from '../screens/BecasInscritas'
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../core/theme';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        activeTintColor: "#000",
        tabBarActiveBackgroundColor: theme.colors.primary,
        inactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: theme.colors.secondary
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Bienvenido",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={theme.colors.primary} />
          )
        }}
      />
      <Tab.Screen
        name="BecasDisponibles"
        component={BecasDisponibles}
        options={{
          title: "Becas Disponibles",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="desktop-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="BecasInscritas"
        component={BecasInscritas}
        options={{
          title: "Becas Inscritas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator
