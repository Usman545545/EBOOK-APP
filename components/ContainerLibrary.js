import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import HollyCardContainer from "./HollyCardContainer";
import CardContainer from "./CardContainer";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerLibrary = ({
  imageDimensions,
  imageId,
  imageDimensionsUrl,
  imageDimensionsCode,
  imageCode,
  imageDimensionsAlt,
  imageDimensionsUrl2,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsTextCode,
  imageDimensionsTextCode2,
  showFrameView,
  frameViewMarginTop,
  onFramePressablePress,
}) => {
  const libraryStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frameViewMarginTop),
    };
  }, [frameViewMarginTop]);

  return (
    <View style={[styles.library, libraryStyle]}>
      <HollyCardContainer
        frame11808742={require("../assets/frame-11808742.png")}
        holly="Holly"
        showFrameView
      />
      <CardContainer
        onFramePressablePress={() => navigation.navigate("Book")}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087422.png")}
        holly="The Land of Lost Things"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087423.png")}
        holly="The Wager"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087424.png")}
        holly="Crying in H Mart"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087425.png")}
        holly="Sapiens"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087426.png")}
        holly="The In-Between: Unforgettable Encounters During Life's Final Moments"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087427.png")}
        holly="Solito"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087428.png")}
        holly="Lightlark"
        showFrameView
        propMarginLeft={16}
      />
      <HollyCardContainer
        frame11808742={require("../assets/frame-118087429.png")}
        holly="Solitaire"
        showFrameView
        propMarginLeft={16}
      />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={imageDimensionsText2}
        />
        <View style={styles.thinkingFastAndSlowWrapper}>
          <Text style={styles.thinkingFastAnd} numberOfLines={1}>
            Thinking, Fast and Slow
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={imageDimensionsTextCode}
        />
        <View style={styles.thinkingFastAndSlowWrapper}>
          <Text style={styles.thinkingFastAnd} numberOfLines={1}>
            Outliers
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={imageDimensionsTextCode2}
        />
        <View style={styles.thinkingFastAndSlowWrapper}>
          <Text style={styles.thinkingFastAnd} numberOfLines={1}>
            None of This is True
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderRadius: Border.br_base,
    width: 163,
    height: 250,
    overflow: "hidden",
  },
  thinkingFastAnd: {
    fontSize: FontSize.textSmall14pxSemiBold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.textSecondary,
    textAlign: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  thinkingFastAndSlowWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
    display: "none",
    minWidth: 120,
    maxWidth: 163,
    marginLeft: 16,
  },
  library: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 32,
    alignSelf: "stretch",
  },
});

export default ContainerLibrary;
