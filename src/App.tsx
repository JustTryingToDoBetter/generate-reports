/**
 * Main App Component
 * Entry point for the mobile application
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <AppNavigator />
    </>
  );
};

export default App;
