import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import IPhoneStatusBar from "../components/IPhoneStatusBar";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Loading = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("LibraryOpen");
  };

  return (
    <View style={styles.loading}>
      <IPhoneStatusBar
        iPhoneStatusBarIPhoneStat={require("../assets/iphone-status-bar3.png")}
        iPhoneStatusBarMaxWidth="100%"
        iPhoneStatusBarWidth="100%"
        iPhoneStatusBarPosition="relative"
        iPhoneStatusBarAlignSelf="stretch"
        iPhoneStatusBarTop="unset"
        iPhoneStatusBarLeft="unset"
      />
      <Pressable style={styles.icons24pxSolidLoader} onPress={handlePress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons-24px--solid--loader3.png")}
        />
      </Pressable>
      <View style={styles.iphoneLineBar}>
        <View style={styles.iphoneLineBarChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  icons24pxSolidLoader: {
    width: 40,
    height: 40,
  },
  iphoneLineBarChild: {
    position: "absolute",
    marginLeft: -64,
    bottom: 10,
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.buttonsNeutralBack,
    width: 128,
    height: 4,
  },
  iphoneLineBar: {
    alignSelf: "stretch",
    height: 24,
  },
  loading: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Loading;
