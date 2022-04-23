/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'
import Home from './src/screens/home'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Choose from './src/screens/choose'
import Login from './src/screens/login'
import SupplierLogin from './src/screens/supplier-login'
import SupplierRegister from './src/screens/supplier-register'
import SupplierDashboard from './src/screens/supplier-dashboard'
import Register from './src/screens/register/index'
import ReceivedOrder from './src/screens/order-received'
import RateSupplier from './src/screens/rate-supplier'
import Delivery from './src/screens/delivery'
import Dashboard from './src/screens/dashboard/'
const Stack = createNativeStackNavigator();

const App: () => Node = () => {


  return (
    
    <SafeAreaView style={{flex:1, width:'100%',}}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <NativeBaseProvider>
          <NavigationContainer>
          <Stack.Navigator  screenOptions={{
                headerShown: false
              }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Choose" component={Choose} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SupplierLogin" component={SupplierLogin} />
            <Stack.Screen name="SupplierDashboard" component={SupplierDashboard} />
            <Stack.Screen name="SupplierRegister" component={SupplierRegister} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ReceivedOrder" component={ReceivedOrder} />
            <Stack.Screen name='RateSupplier' component={ RateSupplier} />
            <Stack.Screen name='Dashboard' component={ Dashboard} />
            <Stack.Screen name='Delivery' component={ Delivery} />
          </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
