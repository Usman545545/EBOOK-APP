import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { signOut } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import { auth } from '../firebase';

const LanguageLearningSection1 = () => {
  const navigation = useNavigation();
  const [displayedText, setDisplayedText] = useState('');
  const [words, setWords] = useState(['Read', 'Your', 'Favourite', 'books', 'here.']);
  const user = auth.currentUser;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (words.length > 0) {
        setDisplayedText(prevText => prevText + ' ' + words.shift());
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // Change this value to control the speed of word display

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleGetStarted = () => {
    // Navigate to the ChooseLang page
    navigation.navigate("ChooseLang");
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
      <View style={styles.container}>
      <Text style={styles.learnLanguageText}>{displayedText}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Image source={require("../assets/freeiconbook3606427-1.png")} style={styles.icon} />
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={signOutUser}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around", // This will space the items evenly
    alignItems: "center",
    paddingVertical: 35, // Add padding to top and bottom
  },
  learnLanguageText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
  },
  buttonContainer: {
    width: '100%', // Take the full width of the container
    alignItems: "center", // Center buttons horizontally
  },
  getStartedButton: {
    flexDirection: "row",
    backgroundColor: 'purple',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%', // Set a width to the button, you can adjust as necessary
    marginBottom: 20, // Space between buttons
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: 'white',
  },
  getStartedText: {
    color: 'white',
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansPro,
  },
  signOutButton: {
    backgroundColor: 'purple',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '40%', // Set a width to the button, you can adjust as necessary
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LanguageLearningSection1;