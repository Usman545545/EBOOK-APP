import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import IPhoneStatusBar from "./IPhoneStatusBar";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textLayout]} numberOfLines={4}>
        <Text
          style={styles.text1}
        >{`... если кто-нибудь узнает о Поттерах. Миссис Поттер была `}</Text>
        <Text style={styles.text2}>сестрой</Text>
        <Text style={styles.text1}>
          {" "}
          миссис Дурсль, но они не встречались уже несколько лет; на самом деле
          миссис Дурсль делала вид, что у нее нет сестры
        </Text>
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-11808778.png")}
          />
          <Text style={[styles.text4, styles.cTypo]}>Частота: 189</Text>
        </View>
        <View style={[styles.sisterParent, styles.frameGroupFlexBox]}>
          <Text style={[styles.sister, styles.cTypo]}>sister</Text>
          <Image
            style={styles.pxArrowWithShortLinerig}
            contentFit="cover"
            source={require("../assets/20px--arrow-with-short-lineright.png")}
          />
          <Text style={[styles.c, styles.cTypo]}>cестра</Text>
        </View>
      </View>
      <Pressable
        style={[styles.pxCloseCancelCrossBig, styles.frameParentPosition]}
        onPress={() => navigation.navigate("Book")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/20px--close-cancel-cross-big.png")}
        />
      </Pressable>
      <View style={styles.frameItem} />
      <IPhoneStatusBar
        iPhoneStatusBarIPhoneStat={require("../assets/iphone-status-bar1.png")}
        iPhoneStatusBarMaxWidth="unset"
        iPhoneStatusBarWidth={390}
        iPhoneStatusBarPosition="absolute"
        iPhoneStatusBarAlignSelf="unset"
        iPhoneStatusBarTop={0}
        iPhoneStatusBarLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  frameParentPosition: {
    top: 56,
    position: "absolute",
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    color: Color.colorGray_400,
  },
  text2: {
    color: Color.colorViolet,
  },
  text: {
    bottom: 24,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    width: 342,
    left: 24,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    width: 12,
    height: 12,
  },
  text4: {
    fontSize: FontSize.textLarge16pxSemiBold_size,
    lineHeight: 18,
    marginLeft: 4,
    color: Color.textSecondary,
    textAlign: "justify",
    fontFamily: FontFamily.robotoRegular,
  },
  frameGroup: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_200,
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_10xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_10xs,
  },
  sister: {
    color: Color.textSecondary,
    textAlign: "justify",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  pxArrowWithShortLinerig: {
    width: 20,
    height: 20,
    marginLeft: 4,
    overflow: "hidden",
  },
  c: {
    color: Color.buttonsNeutralBack,
    marginLeft: 4,
    textAlign: "justify",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  sisterParent: {
    justifyContent: "center",
    marginTop: 12,
  },
  frameParent: {
    left: 24,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  pxCloseCancelCrossBig: {
    right: 24,
    width: 24,
    height: 24,
  },
  frameItem: {
    marginLeft: -195.5,
    bottom: 0,
    left: "50%",
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    position: "absolute",
  },
  parent: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 390,
    height: 280,
    overflow: "hidden",
    position: "absolute",
  },
});

export default SectionCard;
