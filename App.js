import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./screens/StartPage";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Book from "./screens/Book";
import Upload from "./screens/Upload";
import Loading from "./screens/Loading";
import AddNewBook from "./screens/AddNewBook";
import LibraryOpen from "./screens/LibraryOpen";
import StartPage1 from "./screens/StartPage1";
import ChooseLang from "./screens/ChooseLang";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SettingScreen from "./screens/SettingScreen";



const Stack = createNativeStackNavigator();

const App = () => {
 
 

  return (
    <>
    <NavigationContainer>
      
        <Stack.Navigator screenOptions={{ headerShown: false }}>

           
           <Stack.Screen name="splash" component={SplashScreen} />
           <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="Upload" component={Upload} />
           <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="LibraryOpen" component={LibraryOpen} />
          <Stack.Screen name="StartPage1" component={StartPage1} />
          <Stack.Screen name="ChooseLang" component={ChooseLang} />
          <Stack.Screen name="AddNewBook" component={AddNewBook} />
        </Stack.Navigator>
      
   
    </NavigationContainer>

      </>
  );
};

export default App;
