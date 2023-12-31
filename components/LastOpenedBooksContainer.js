import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import ContainerLibrary from "./ContainerLibrary";
import TypeNeutralStateDefaultI from "./TypeNeutralStateDefaultI";

const LastOpenedBooksContainer = () => {
  
  return (
    <View style={styles.libraryParent}>
      <ContainerLibrary
        imageDimensions={require("../assets/frame-1180874213.png")}
        imageId={require("../assets/frame-1180874214.png")}
        imageDimensionsUrl={require("../assets/frame-1180874215.png")}
        imageDimensionsCode={require("../assets/frame-1180874216.png")}
        imageCode={require("../assets/frame-1180874217.png")}
        imageDimensionsAlt={require("../assets/frame-1180874218.png")}
        imageDimensionsUrl2={require("../assets/frame-1180874219.png")}
        imageDimensionsText={require("../assets/frame-1180874220.png")}
        imageDimensionsText2={require("../assets/frame-1180874221.png")}
        imageDimensionsTextCode={require("../assets/frame-1180874222.png")}
        imageDimensionsTextCode2={require("../assets/frame-1180874223.png")}
       
      />
      <TypeNeutralStateDefaultI
        mailEditOuLc={require("../assets/20px--down-arrow-31.png")}
        icons24pxSolidLoader={require("../assets/icons-24px--solid--loader7.png")}
        prop="Show all 27 books"
        mailEditOuLc1={require("../assets/mail-edit-oulc5.png")}
        showMailEditOuLc
        typeNeutralStateDefaultIPosition="unset"
        typeNeutralStateDefaultIMarginTop={24}
        basebutton40BackgroundColor="unset"
        basebutton40BorderColor="#272c34"
        textColor="#fff"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  libraryParent: {
    alignSelf: "stretch",
    marginTop: 32,
  },
});

export default LastOpenedBooksContainer;
