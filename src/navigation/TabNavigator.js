import React from 'react'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Dashboard from '../screens/Dashboard'
import BecasDisponibles from '../screens/BecasDisponibles'
import BecasInscritas from '../screens/BecasInscritas'
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../core/theme';
import {
  Dashboard,
  StartScreen
} from '../screens'

i18n.fallbacks = true
i18n.translations = { es, en }
i18n.locale = Localization.locale
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="StartScreen"
      component={StartScreen}
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
          title: i18n.t('tabnavigator.home'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={theme.colors.primary} />
          )
        }}
      />
      <Tab.Screen
        name="BecasDisponibles"
        component={BecasDisponibles}
        options={{
          title: i18n.t('tabnavigator.available_scholarships'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="desktop-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="BecasInscritas"
        component={BecasInscritas}
        options={{
          title: i18n.t('tabnavigator.enrolled_scholarships'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator
