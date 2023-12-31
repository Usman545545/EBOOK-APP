import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border } from '../GlobalStyles';

const StartPage = () => {
  const navigation = useNavigation();

  const handleEbookWorldClick = () => {
    // Navigate to StartPage1 when "E BOOK WORLD" is clicked
    navigation.navigate('StartPage1');
  };

  return (
    <View style={styles.startPage}>
      <TouchableOpacity onPress={handleEbookWorldClick} style={styles.button}>
        <Text style={styles.eBookWorld}>E BOOK WORLD</Text>
      </TouchableOpacity>
      <Image
        style={styles.redPlayButtonIcon1}
        contentFit="cover"
        source={require('../assets/redplaybuttonicon-1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eBookWorld: {
    fontSize: FontSize.size_13xl,
    textDecoration: 'underline',
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    color: Color.buttonsNeutralBack,
    textAlign: 'center',
    width: 274,
    height: 161,
  },
  button: {
    top: 504,
    left: 66,
    position: 'absolute',
  },
  redPlayButtonIcon1: {
    top: 328,
    left: 114,
    borderRadius: 184,
    width: 162,
    height: 138,
    position: 'absolute',
  },
  startPage: {
    borderRadius: Border.br_13xl,
    backgroundColor: '#1d1724',
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default StartPage;
