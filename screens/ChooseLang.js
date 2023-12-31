import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import IPhoneStatusBar from "../components/IPhoneStatusBar";
import { useNavigation } from "@react-navigation/native";
import EnglishSection from "../components/EnglishSection";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ChooseLang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseLang}>
      <IPhoneStatusBar
        iPhoneStatusBarIPhoneStat={require("../assets/iphone-status-bar1.png")}
        iPhoneStatusBarMaxWidth="100%"
        iPhoneStatusBarWidth="100%"
        iPhoneStatusBarPosition="relative"
        iPhoneStatusBarAlignSelf="stretch"
        iPhoneStatusBarTop="unset"
        iPhoneStatusBarLeft="unset"
      />
      <View style={styles.whatLanguageAreYouStudyingParent}>
        <Text style={styles.whatLanguageAre}>
          What language are you studying now?
        </Text>
        <Pressable
          style={styles.pxArrowWithShortLineBigWrapper}
          onPress={() => navigation.navigate("StartPage1")}
        >
          <Image
            style={styles.pxArrowWithShortLineBig}
            contentFit="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
      <EnglishSection />
      <View style={[styles.iphoneLineBar, styles.iphonePosition]}>
        <View style={[styles.iphoneLineBarChild, styles.iphonePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonePosition: {
    left: "50%",
    position: "absolute",
  },
  whatLanguageAre: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.buttonsNeutralBack,
    textAlign: "center",
    zIndex: 0,
    flex: 1,
  },
  pxArrowWithShortLineBig: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pxArrowWithShortLineBigWrapper: {
    top: 24,
    left: 24,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_7xs,
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
  },
  whatLanguageAreYouStudyingParent: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: 64,
    paddingVertical: Padding.p_5xl,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    top: 821,
    width: 390,
    height: 24,
    zIndex: 3,
  },
  chooseLang: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_200,
    width: "100%",
    height: 844,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ChooseLang;
