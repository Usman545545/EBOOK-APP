import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import { Border, Color, Padding } from "../GlobalStyles";

const AddNewBookForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pxButtonAccentParent}>
      <FormContainer1
        plusSqFr={require("../assets/plus-sqfr2.png")}
        icons24pxSolidLoader={require("../assets/icons-24px--solid--loader8.png")}
        addNewEPUBBook="Add new book"
        mailEditOuLc={require("../assets/mail-edit-oulc6.png")}
        propMarginTop="unset"
        onPxButtonAccentPress={() => navigation.navigate("Upload")}
      />
      <View style={styles.iphoneLineBar}>
        <View style={styles.iphoneLineBarChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneLineBarChild: {
    position: "absolute",
    marginLeft: -64,
    bottom: 10,
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.buttonsNeutralBack,
    width: 128,
    height: 4,
  },
  iphoneLineBar: {
    width: 390,
    height: 24,
    marginTop: 40,
  },
  pxButtonAccentParent: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_29xl,
  },
});

export default AddNewBookForm1;
