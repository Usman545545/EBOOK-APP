import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const CardContainer = ({ onFramePressablePress }) => {
  return (
    <Pressable style={styles.frameParent} onPress={onFramePressablePress}>
      <Image
        style={[styles.frameChild, styles.frameChildFlexBox]}
        contentFit="cover"
        source={require("../assets/frame-118087421.png")}
      />
      <View style={styles.harryPotterAndThePhilosophWrapper}>
        <Text
          style={[styles.harryPotterAnd, styles.frameChildFlexBox]}
          numberOfLines={1}
        >
          Harry Potter and the Philosopher's Stone
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: Border.br_base,
    maxWidth: "100%",
    height: 250,
    width: "100%",
  },
  harryPotterAnd: {
    fontSize: FontSize.textSmall14pxSemiBold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.textSecondary,
    textAlign: "center",
  },
  harryPotterAndThePhilosophWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
    minWidth: 120,
    maxWidth: 163,
    marginLeft: 16,
  },
});

export default CardContainer;
