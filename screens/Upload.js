import * as React from "react";
import { Image, StyleSheet, View, Pressable, TextInput } from "react-native";
import IPhoneStatusBar from "../components/IPhoneStatusBar";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Upload = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to "Loading" screen when pressed
    navigation.navigate("Loading");
  };

  return (
    <View style={styles.upload}>
      <IPhoneStatusBar
        iPhoneStatusBarIPhoneStat={require("../assets/iphone-status-bar2.png")}
        iPhoneStatusBarMaxWidth="unset"
        iPhoneStatusBarWidth={390}
        iPhoneStatusBarPosition="absolute"
        iPhoneStatusBarAlignSelf="unset"
        iPhoneStatusBarTop={0}
        iPhoneStatusBarLeft={0}
      />
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor={Color.colorGray_400}
        />
      </View>
      <Image
        style={styles.photo2023090306351}
        contentFit="cover"
        source={require("../assets/photo-20230903-0635-1.png")}
      />
      <Pressable style={styles.uploadChild} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorGray_200,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    height: 40,
    borderColor: Color.colorGray_300,
    borderBottomWidth: 1,
    paddingLeft: 10,
    color: Color.colorGray_100,
    flex: 1,
  },
  photo2023090306351: {
    top: -28,
    left: -10,
    width: 380,
    height: 830,
    position: "absolute",
    borderBottomWidth: 20,
    borderBottomColor: Color.colorGray_300,
  },
  uploadChild: {
    top: 169,
    left: 27,
    width: 112,
    height: 185,
    position: "absolute",
    overflow: "hidden",
  },
  upload: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Upload;
