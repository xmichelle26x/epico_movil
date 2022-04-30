import React from "react";
// import { StackNavigator, TabNavigator, DrawerNavigator } from "@react-navigation";
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DrawerContent from "../screens/Sidebar"
import Profile from '../screens/Profile';
import Extra from '../screens/Extra';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Info from '../screens/Info';
import Logout from '../screens/Logout';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Drawer = createDrawerNavigator();


export const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  Logout: {
    screen: Logout,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Drawer,
  },
  Profile: {
    screen: Profile,
  },
  Extra: {
    screen: Extra,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e58f19',
    activeBackgroundColor: "#a9c3d2",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign Up"
    }
  },
});

export const RootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    }, {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'autoprefixer';
                size = focused ? 25 : 20;
                // color = focused ? '#f0f' : '#555';
              } else if (route.name === 'Profile') {
                iconName = 'btc';
                size = focused ? 25 : 20;
                // color = focused ? '#f0f' : '#555';
              } else if (route.name === 'Extra') {
                iconName = 'btc';
                size = focused ? 25 : 20;
                // color = focused ? '#f0f' : '#555';
              }
              return (
                <FontAwesome5
                  name={iconName}
                  size={size}
                  color={color}
                />
              )
            }
          })}
          tabBarOptions={{
            activeTintColor: '#f0f',
            inactiveTintColor: '#555',
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#999',
            showLabel: true,
            labelStyle: { fontSize: 14 },
            showIcon: true,
          }}
          activeColor='#f0edf6'
          inactiveColor='#3e2465'
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Drawer.Navigator
              initialRouteName="Home"
              drawerPosition='left'
              drawerType="front"
              edgeWidth={100}
              hideStatusBar={false}
              overlayColor='#00000090'
              drawerStyle={{
                backgroundColor: '#e6e6e6',
                width: 250
              }}
              screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#0080ff'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontSize: 25,
                  fontWeight: 'bold'
                }
              }}>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                  name="ResetPasswordScreen"
                  component={ResetPasswordScreen}
                />
            </Drawer.Navigator>
          </Stack.Navigator>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}