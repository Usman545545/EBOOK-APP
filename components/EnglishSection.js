import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "./FormContainer";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const EnglishSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={styles.frameWrapper}
        onPress={() => navigation.navigate("AddNewBook")}
      >
        <View style={styles.flagsParent}>
          <Image
            style={styles.flagsIcon}
            contentFit="cover"
            source={require("../assets/flags.png")}
          />
          <Text style={styles.english}>English</Text>
        </View>
      </Pressable>
      <FormContainer
        dimensionCode={require("../assets/flags1.png")}
        countryCode="Spain"
      />
      <FormContainer
        dimensionCode={require("../assets/flags2.png")}
        countryCode="French"
      />
      <FormContainer
        dimensionCode={require("../assets/flags3.png")}
        countryCode="Russian"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flagsIcon: {
    borderRadius: Border.br_10xs,
    width: 21,
    height: 15,
    overflow: "hidden",
  },
  english: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontFamily: FontFamily.robotoRegular,
    color: Color.buttonsNeutralBack,
    textAlign: "left",
    marginLeft: 8,
  },
  flagsParent: {
    position: "absolute",
    top: 14,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
    height: 56,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    zIndex: 2,
    alignSelf: "stretch",
  },
});

export default EnglishSection;
