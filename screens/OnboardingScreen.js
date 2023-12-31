import React, { useRef ,useState , useEffect } from 'react';
import { Animated, StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

const slides = [
  {
    key: 'search',
    title: 'Dynamic Book Search',
    text: 'Find your favorite books with our advanced search feature',
    image: require('../images/search1.png'), // replace with your own image
  },
  {
    key: 'read',
    title: 'Read Instantly',
    text: 'Open and read books instantly in the app',
    image: require('../images/read-instant2.png'), // replace with your own image
  },
  {
    key: 'favorites',
    title: 'Favorites',
    text: 'Easily add books to your favorites for quick access',
    image: require('../images/addtofavv.png'), // replace with your own image
  },
];


const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const fadeAnim = new Animated.Value(0); // Animated value for fade-in effect

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [currentSlideIndex]); // Re-run the animation when the slide changes

  const onDone = () => {
    navigation.navigate('Login'); // Adjust as needed
  };

  const onSkip = () => {
    setCurrentSlideIndex(slides.length - 1);
  };

 const renderItem = ({ item, index }) => {
  return (
    <View style={styles.slide}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.overlayContainer}>
          {[...Array(10).keys()].map(key => (
            <View 
              key={key} 
              style={[styles.overlay, { opacity: key * 0.1 }]} 
            />
          ))}
        </View>
      </Animated.View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};




  const renderNextButton = () => <Text style={[styles.button, styles.nextButton]}>Next</Text>;
  const renderSkipButton = () => <Text style={[styles.button, styles.skipButton]}>Skip</Text>;
  const renderDoneButton = () => <Text style={[styles.button, styles.doneButton]}>Done</Text>;

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      onSkip={onSkip}
      showSkipButton
      onSlideChange={(index) => setCurrentSlideIndex(index)}
      activeDotStyle={{ backgroundColor: 'white' }}
      dotStyle={{ backgroundColor: 'grey' }}
    />
  );
};



const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14161b', // Black background for each slide
  },
  image: {
    width: 350,
    height: 400,
    marginVertical: -20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    color: '#7D3C98', // Purple for title
  },
  text: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 16,
    textAlign: 'center',
    color: '#BDBDBD', // Light grey for text
  },
  button: {
    fontSize: 18,
  },
  skipButton: {
    color: '#7D3C98',
    borderColor: '#7D3C98',
    borderWidth: 2,
    borderRadius: 20,
    width: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
  },

  fadeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  nextButton: {
    color: 'white',
    backgroundColor: '#7D3C98',
    borderWidth: 2,
    borderRadius: 20,
    width: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  doneButton: {
    color: 'white',
    backgroundColor: '#7D3C98',
    borderWidth: 2,
    borderRadius: 20,
    width: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
  }
});

export default OnboardingScreen;
