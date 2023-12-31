import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer = ({ dimensionCode, countryCode }) => {
  return (
    <View style={styles.frameWrapper}>
      <View style={styles.flagsParent}>
        <Image
          style={styles.flagsIcon}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={styles.spain}>{countryCode}</Text>
      </View>
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
  spain: {
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
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
    height: 56,
    marginTop: 8,
    overflow: "hidden",
  },
});

export default FormContainer;
