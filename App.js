import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import Welcome from './screens/Welcome';

export default function App() {

  const [isLoading, setIsLoading] = useState();

  setTimeout(() => {
    setIsLoading(true);
  }, 3000);

  return (
    <NavigationContainer>
      {isLoading? <MyStack/> : <Welcome/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
