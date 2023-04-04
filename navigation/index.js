import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Course from '../screens/Course';
import ContactUs from '../screens/ContactUs';
import About from '../screens/About';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>

      {/* About Home screen */}
      <Stack.Screen name="Home" options={{headerShown: false}} >
        {(props) => <Home {...props} channelName={'EduHub'}/>}
      </Stack.Screen>
      
      {/* About course screen */}
      <Stack.Screen name="Course" component={Course} 
      options={{headerTitleStyle:{ fontSize: 30}, headerTitle: 'Courses', headerTitleAlign: 'center'}} />
      
      {/* About contact us screen */}
      <Stack.Screen name="Contact" component={ContactUs} 
      options={{headerTitleStyle:{ fontSize: 30}, headerTitle: 'Contact Us', headerTitleAlign: 'center'}} />
      
      {/* About, about us screen */}
      <Stack.Screen name="About" component={About} 
      options={{headerTitleStyle:{ fontSize: 30}, headerTitle: 'About Me 😉', headerTitleAlign: 'center'}}  />
    </Stack.Navigator>
  );
}

export default MyStack;