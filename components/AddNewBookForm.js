import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const AddNewBookForm = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.pxButtonAccentParent, styles.iphoneLineBarPosition]}
      locations={[0, 0.33, 1]}
      colors={["rgba(20, 22, 27, 0)", "rgba(20, 22, 27, 0.8)", "#14161b"]}
    >
      <View style={styles.pxButtonAccent}>
        <Pressable
          style={styles.basebutton40}
          onPress={() => navigation.navigate("Upload")}
        >
          <Image
            style={[styles.plusSqFrIcon, styles.plusSqFrIconLayout]}
            contentFit="cover"
            source={require("../assets/plus-sqfr1.png")}
          />
          <Image
            style={[styles.icons24pxSolidLoader, styles.mailEditOuLcSpaceBlock]}
            contentFit="cover"
            source={require("../assets/icons-24px--solid--loader6.png")}
          />
          <Text style={styles.addNewBook}>Add new book</Text>
          <Image
            style={[styles.mailEditOuLc, styles.mailEditOuLcSpaceBlock]}
            contentFit="cover"
            source={require("../assets/mail-edit-oulc4.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.iphoneLineBar, styles.iphoneLineBarPosition]}>
        <View style={styles.iphoneLineBarChild} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphoneLineBarPosition: {
    width: 390,
    bottom: 0,
    position: "absolute",
  },
  plusSqFrIconLayout: {
    width: 24,
    height: 24,
  },
  mailEditOuLcSpaceBlock: {
    display: "none",
    marginLeft: 8,
  },
  plusSqFrIcon: {
    height: 24,
    overflow: "hidden",
  },
  icons24pxSolidLoader: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  addNewBook: {
    fontSize: FontSize.textLarge16pxSemiBold_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textSmall14pxSemiBold,
    color: Color.buttonsNeutralBack,
    textAlign: "center",
    marginLeft: 8,
  },
  mailEditOuLc: {
    width: 20,
    height: 20,
    marginLeft: 8,
    overflow: "hidden",
  },
  basebutton40: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorBlueviolet,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  pxButtonAccent: {
    top: 48,
    left: 24,
    width: 342,
    height: 48,
    flexDirection: "row",
    position: "absolute",
  },
  iphoneLineBarChild: {
    marginLeft: -64,
    bottom: 10,
    backgroundColor: Color.buttonsNeutralBack,
    width: 128,
    height: 4,
    borderRadius: Border.br_xs,
    left: "50%",
    position: "absolute",
  },
  iphoneLineBar: {
    left: 0,
    height: 24,
  },
  pxButtonAccentParent: {
    marginLeft: -195,
    height: 160,
    backgroundColor: "transparent",
    left: "50%",
  },
});

export default AddNewBookForm;
