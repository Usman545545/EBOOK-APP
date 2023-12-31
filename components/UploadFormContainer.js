import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const UploadFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.uploadYourFavoriteBookAndParent}>
        <Text style={[styles.uploadYourFavorite, styles.uploadFlexBox]}>
          Upload your favorite book and start your journey!
        </Text>
        <Text style={[styles.youCanUpload, styles.uploadFlexBox]}>
          You can upload book in .EPUB format
        </Text>
      </View>
      <FormContainer1
        plusSqFr={require("../assets/plus-sqfr.png")}
        icons24pxSolidLoader={require("../assets/icons-24px--solid--loader4.png")}
        addNewEPUBBook="Add new .EPUB book"
        mailEditOuLc={require("../assets/mail-edit-oulc.png")}
        onPxButtonAccentPress={() => navigation.navigate("Upload")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  uploadFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  uploadYourFavorite: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.buttonsNeutralBack,
  },
  youCanUpload: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontFamily: FontFamily.robotoRegular,
    color: Color.textSecondary,
    marginTop: 16,
  },
  uploadYourFavoriteBookAndParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 24,
    alignSelf: "stretch",
  },
});

export default UploadFormContainer;
