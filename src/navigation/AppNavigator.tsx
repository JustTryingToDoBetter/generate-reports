/**
 * App Navigator
 * Configures navigation between screens
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ReportDetailScreen } from '../screens/ReportDetailScreen';
import { UserSelectionScreen } from '../screens/UserSelectionScreen';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6366f1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReportDetail"
          component={ReportDetailScreen}
          options={{
            title: 'Report Details',
          }}
        />
        <Stack.Screen
          name="UserSelection"
          component={UserSelectionScreen}
          options={{
            title: 'Send Report',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
