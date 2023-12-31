import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HollyCardContainer = ({
  frame11808742,
  holly,
  showFrameView,
  propMarginLeft,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    showFrameView && (
      <View style={[styles.frameParent, frameViewStyle]}>
        <Image
          style={[styles.frameChild, styles.hollyFlexBox]}
          contentFit="cover"
          source={frame11808742}
        />
        <View style={styles.hollyWrapper}>
          <Text style={[styles.holly, styles.hollyFlexBox]} numberOfLines={1}>
            {holly}
          </Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  hollyFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: Border.br_base,
    maxWidth: "100%",
    height: 250,
    width: "100%",
  },
  holly: {
    fontSize: FontSize.textSmall14pxSemiBold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.textSecondary,
    textAlign: "center",
  },
  hollyWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
    minWidth: 120,
    maxWidth: 163,
  },
});

export default HollyCardContainer;
