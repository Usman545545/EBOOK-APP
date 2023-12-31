import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  plusSqFr,
  icons24pxSolidLoader,
  addNewEPUBBook,
  mailEditOuLc,
  propMarginTop,
  onPxButtonAccentPress,
}) => {
  const pxButtonAccentStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <Pressable
      style={[
        styles.pxButtonAccent,
        styles.basebutton40FlexBox,
        pxButtonAccentStyle,
      ]}
      onPress={onPxButtonAccentPress}
    >
      <View style={[styles.basebutton40, styles.basebutton40FlexBox]}>
        <Image
          style={[styles.plusSqFrIcon, styles.plusSqFrIconLayout]}
          contentFit="cover"
          source={plusSqFr}
        />
        <Image
          style={[styles.icons24pxSolidLoader, styles.mailEditOuLcSpaceBlock]}
          contentFit="cover"
          source={icons24pxSolidLoader}
        />
        <Text style={styles.addNewEpub}>{addNewEPUBBook}</Text>
        <Image
          style={[styles.mailEditOuLc, styles.mailEditOuLcSpaceBlock]}
          contentFit="cover"
          source={mailEditOuLc}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basebutton40FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  plusSqFrIconLayout: {
    height: 24,
    width: 24,
  },
  mailEditOuLcSpaceBlock: {
    display: "none",
    marginLeft: 8,
  },
  plusSqFrIcon: {
    overflow: "hidden",
  },
  icons24pxSolidLoader: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  addNewEpub: {
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
    flex: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorBlueviolet,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
  },
  pxButtonAccent: {
    height: 48,
    marginTop: 32,
  },
});

export default FormContainer1;
