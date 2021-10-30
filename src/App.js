import React, {useState, useEffect} from 'react';

import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import { IconButton } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Sign from './pages/Sign';
import Messages from './pages/Messages';

import colors from './styles/colors'


const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user); // boolean olmasını sağladım !! ile 
      console.log("user durumu " + !!user)
    })
  }, [])

  const logOut = () => {
    
  }

  const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
        />
        <Stack.Screen
          name="SignPage"
          component={Sign} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
          ) : (
          
          <Stack.Screen 
            name="Messages"
            component={Messages}
            options={{
              title: 'dertler',
              headerTitleStyle: {color: colors.darkgreen},
              headerTitleAlign: 'center',
              headerRight: () => (
                <IconButton
                  icon="logout"
                  color={colors.darkgreen}
                  size={25}
                  onPress={() => auth().signOut().then(() => console.log('User signed out!'))}
                />
              ),
            }}
          />
          )}  
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
