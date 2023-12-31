// SplashScreen.js
import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  // Create an Animated.Value for each letter
  const lettersAnim = 'EBOOK APP'.split('').map(() => useRef(new Animated.Value(0)).current);

  useEffect(() => {
    const animations = lettersAnim.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 1,
        duration: 150,
        delay: index * 20,
        useNativeDriver: true,
      });
    });

    // Sequentially animate each letter
    Animated.sequence(animations).start(() => {
      setTimeout(() => {
        setIsSplashScreen(false);
        // Navigate to OnboardingScreen after animation
        navigation.replace('Onboarding');
      }, 1000);
    });
  }, [lettersAnim, navigation]);

  if (isSplashScreen) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/EbookLogo.png')} // Corrected require statement
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          {'EBOOK APP'.split('').map((letter, index) => (
            <Animated.Text key={index} style={{ ...styles.text, opacity: lettersAnim[index] }}>
              {letter}
            </Animated.Text>
          ))}
        </View>
      </View>
    );
  }

  return null; // Splash screen is hidden after animation
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#14161b', // Light grey color
  },
  logo: {
    width: 150, // Adjust the size as needed
    height: 150, // Adjust the size as needed
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50, // Adjust distance from bottom as needed
  },
  text: {
    color: '#8A2BE2', // This can also be updated to use your color system if needed
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});
