import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Basebutton40 = ({
  mailEditOuLc,
  icons24pxSolidLoader,
  prop,
  mailEditOuLc1,
  showMailEditOuLc,
  showIcons24pxSolidLoader,
  mailEditOuLcVisible,
  basebutton40Position,
  basebutton40BackgroundColor,
  basebutton40BorderStyle,
  basebutton40BorderColor,
  basebutton40BorderWidth,
  textFontWeight,
  textFontFamily,
  textColor,
}) => {
  const basebutton40Style = useMemo(() => {
    return {
      ...getStyleValue("position", basebutton40Position),
      ...getStyleValue("backgroundColor", basebutton40BackgroundColor),
      ...getStyleValue("borderStyle", basebutton40BorderStyle),
      ...getStyleValue("borderColor", basebutton40BorderColor),
      ...getStyleValue("borderWidth", basebutton40BorderWidth),
    };
  }, [
    basebutton40Position,
    basebutton40BackgroundColor,
    basebutton40BorderStyle,
    basebutton40BorderColor,
    basebutton40BorderWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", textFontWeight),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("color", textColor),
    };
  }, [textFontWeight, textFontFamily, textColor]);

  return (
    <View style={[styles.basebutton40, basebutton40Style]}>
      {showMailEditOuLc && (
        <Image
          style={styles.mailLayout}
          contentFit="cover"
          source={mailEditOuLc}
        />
      )}
      {showIcons24pxSolidLoader && (
        <Image
          style={styles.icons24pxSolidLoader}
          contentFit="cover"
          source={icons24pxSolidLoader}
        />
      )}
      <Text style={[styles.text, textStyle]}>{prop}</Text>
      {mailEditOuLcVisible && (
        <Image
          style={[styles.mailEditOuLc1, styles.mailLayout]}
          contentFit="cover"
          source={mailEditOuLc1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mailLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  icons24pxSolidLoader: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  text: {
    fontSize: FontSize.textSmall14pxSemiBold_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.textSmall14pxSemiBold,
    color: Color.buttonsNeutralBack,
    textAlign: "center",
    marginLeft: 8,
  },
  mailEditOuLc1: {
    marginLeft: 8,
  },
  basebutton40: {
    borderRadius: Border.br_xs,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Basebutton40;
