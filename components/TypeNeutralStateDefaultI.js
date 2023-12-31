import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Basebutton40 from "./Basebutton40";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeNeutralStateDefaultI = ({
  mailEditOuLc,
  icons24pxSolidLoader,
  prop,
  mailEditOuLc1,
  showMailEditOuLc,
  typeNeutralStateDefaultIPosition,
  typeNeutralStateDefaultIMarginTop,
  basebutton40BackgroundColor,
  basebutton40BorderColor,
  textColor,
  onPxButtonAccentPress,
}) => {
  const typeNeutralStateDefaultIStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeNeutralStateDefaultIPosition),
      ...getStyleValue("marginTop", typeNeutralStateDefaultIMarginTop),
    };
  }, [typeNeutralStateDefaultIPosition, typeNeutralStateDefaultIMarginTop]);

  const basebutton40Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", basebutton40BackgroundColor),
      ...getStyleValue("borderColor", basebutton40BorderColor),
    };
  }, [basebutton40BackgroundColor, basebutton40BorderColor]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View
      style={[styles.typeneutralStatedefaultI, typeNeutralStateDefaultIStyle]}
      onPress={onPxButtonAccentPress}
    >
      <Basebutton40
        mailEditOuLc={require("../assets/mail-edit-oulc1.png")}
        icons24pxSolidLoader={require("../assets/icons-24px--solid--loader2.png")}
        prop="Кнопка"
        mailEditOuLc1={require("../assets/mail-edit-oulc2.png")}
        showMailEditOuLc
        showIcons24pxSolidLoader={false}
        mailEditOuLcVisible={false}
        basebutton40Position="unset"
        basebutton40BackgroundColor="#fff"
        basebutton40BorderStyle="solid"
        basebutton40BorderColor="#e6e7ec"
        basebutton40BorderWidth={1}
        textFontWeight="500"
        textFontFamily="Inter-Medium"
        textColor="#0a1b39"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typeneutralStatedefaultI: {
    height: 40,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default TypeNeutralStateDefaultI;
