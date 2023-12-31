import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IPhoneStatusBar = ({
  iPhoneStatusBarIPhoneStat,
  iPhoneStatusBarMaxWidth,
  iPhoneStatusBarWidth,
  iPhoneStatusBarPosition,
  iPhoneStatusBarAlignSelf,
  iPhoneStatusBarTop,
  iPhoneStatusBarLeft,
}) => {
  const iPhoneStatusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("maxWidth", iPhoneStatusBarMaxWidth),
      ...getStyleValue("width", iPhoneStatusBarWidth),
      ...getStyleValue("position", iPhoneStatusBarPosition),
      ...getStyleValue("alignSelf", iPhoneStatusBarAlignSelf),
      ...getStyleValue("top", iPhoneStatusBarTop),
      ...getStyleValue("left", iPhoneStatusBarLeft),
    };
  }, [
    iPhoneStatusBarMaxWidth,
    iPhoneStatusBarWidth,
    iPhoneStatusBarPosition,
    iPhoneStatusBarAlignSelf,
    iPhoneStatusBarTop,
    iPhoneStatusBarLeft,
  ]);

  return (
    <Image
      style={[styles.iphoneStatusBar, iPhoneStatusBarStyle]}
      contentFit="cover"
      source={iPhoneStatusBarIPhoneStat}
    />
  );
};

const styles = StyleSheet.create({
  iphoneStatusBar: {
    width: 360,
    height: 44,
    overflow: "hidden",
  },
});

export default IPhoneStatusBar;
