import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

import IPhoneStatusBar from "../components/IPhoneStatusBar";
import LanguageLearningSection1 from "../components/LanguageLearningSection1";
import { Border, Color } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';

import Profile from "../components/Profile";
import { useNavigation } from "@react-navigation/native";

const StartPage1 = () => {
  const navigation = useNavigation();


  
  return (
    <View style={[styles.startPage, styles.startPageLayout]}>
            <View style={styles.header}>
        <Profile />
      </View>

      <View style={[styles.iphoneLineBar, styles.iphonePosition]}>
        <View style={[styles.iphoneLineBarChild, styles.iphonePosition]} />
      </View>
      <View style={styles.iphoneStatusBarParent}>
        

        <Image
          style={[styles.frameChild, styles.startPageLayout]}
          contentFit="cover"
          source={require("../assets/frame-11808786.png")}
        />
        
      </View>
      <LanguageLearningSection1 />
      
    </View>
  );
};

const styles = StyleSheet.create({
  startPageLayout: {
    overflow: "hidden",
    width: "100%",
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    padding: 10, // Add padding as needed
    // If you have a status bar or notch, you may want to add additional paddingTop here
  },
  iphonePosition: {
    left: "50%",
    position: "absolute",
  },
  iphoneLineBarChild: {
    marginLeft: -64,
    bottom: 10,
    borderRadius: Border.br_xs,
    backgroundColor: Color.buttonsNeutralBack,
    width: 128,
    height: 4,
  },
  iphoneLineBar: {
    marginLeft: -195,
    bottom: 0,
    width: 390,
    height: 24,
    zIndex: 0,
  },
  frameChild: {
    maxWidth: "100%",
    height: 420,
    alignSelf: "stretch",
  },
  iphoneStatusBarParent: {
    zIndex: 1,
    alignSelf: "stretch",
    flex: 1,
  },
  startPage: {
    backgroundColor: Color.colorGray_200,
    height: 844,
    justifyContent: "space-between",
    flex: 1,
  },
});

export default StartPage1;
