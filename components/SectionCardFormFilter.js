import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SectionCardFormFilter = ({ onFramePressablePress }) => {
  return (
    <View style={[styles.iphoneLineBarParent, styles.parentPosition]}>
      <View style={[styles.iphoneLineBar, styles.iphonePosition]}>
        <View style={[styles.iphoneLineBarChild, styles.iphonePosition]} />
      </View>
      <View style={[styles.from1049Parent, styles.parentPosition]}>
        <Text style={styles.from1049}>6 from 1049</Text>
        <View style={[styles.sunnyWrapper, styles.wrapperPosition]}>
          <Image
            style={styles.sunnyIcon}
            contentFit="cover"
            source={require("../assets/sunny.png")}
          />
        </View>
        <Pressable
          style={[
            styles.pxArrowWithShortLineBigWrapper,
            styles.wrapperPosition,
          ]}
          onPress={onFramePressablePress}
        >
          <Image
            style={styles.sunnyIcon}
            contentFit="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    width: 390,
    position: "absolute",
  },
  iphonePosition: {
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    padding: Padding.p_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
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
    bottom: 0,
    height: 24,
    width: 390,
  },
  from1049: {
    bottom: 6,
    left: 154,
    fontSize: FontSize.textLarge16pxSemiBold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.textSecondary,
    textAlign: "center",
    position: "absolute",
  },
  sunnyIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  sunnyWrapper: {
    left: 334,
  },
  pxArrowWithShortLineBigWrapper: {
    left: 24,
  },
  from1049Parent: {
    top: 16,
    height: 32,
    width: 390,
  },
  iphoneLineBarParent: {
    top: 756,
    backgroundColor: Color.colorGray_200,
    height: 88,
    width: 390,
  },
});

export default SectionCardFormFilter;
