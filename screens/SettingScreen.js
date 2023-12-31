import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  Button,
 
} from 'react-native';
import { Switch } from 'react-native';

import { AntDesign, FontAwesome5, MaterialIcons,  Entypo , FontAwesome} from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { auth, db } from '../firebase'; // Ensure these are correctly imported
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import {  useEffect } from 'react';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import FeatherIcon from 'react-native-vector-icons/Feather'; // Another icon from the library
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { ToastAndroid } from 'react-native'; 



import { storage } from 'firebase/storage';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SettingScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

   const [PhoneNumber, setPhoneNumber] = useState("");
   const [FirstName, setFirstName] = useState("");
   const [LastName, setLastName] = useState("");
   const [Email, setEmail] = useState("");

    const [fontSize, setFontSize] = useState("Medium");
    const [darkMode, setDarkMode] = useState(false);
  const [textAlignment, setTextAlignment] = useState('left');
  const [pageAnimation, setPageAnimation] = useState('slide');

 
   // State variables to control edit mode
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
       uploadImageToFirebase(result.uri);
    }
    setModalVisible(false);
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      uploadImageToFirebase(result.uri);

    }
    setModalVisible(false);
  };

   useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setPhoneNumber(userData.phone);
          if (userData.profileImageUrl) {
            setProfileImage(userData.profileImageUrl);
          }
        } else {
          console.log('No user data found');
        }
      }
    };

    fetchUserData();
  }, []);

  // Function to handle saving the updated profile information
 
  const handleSaveProfile = async () => {
    try {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        firstName: FirstName,
        lastName: LastName,
        phone: PhoneNumber,
        // profileImageUrl: profileImage, // Uncomment if handling image uploading
      });
      Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
      // Turn off editing mode after saving
      setIsEditingFirstName(false);
      setIsEditingLastName(false);
      setIsEditingPhoneNumber(false);
    } catch (error) {
      console.error("Error updating profile: ", error);
      Alert.alert('Error', 'There was an error updating your profile.');
    }
  };
  

 const uploadImageToFirebase = async (imageUri) => {
  const currentUserUid = auth.currentUser.uid;
  const fileName = `profile_${currentUserUid}_${Date.now()}`;
  const storage = getStorage();
  const reference = storageRef(storage, `profileImages/${fileName}`);
  const response = await fetch(imageUri);
  const blob = await response.blob();

  try {
    await uploadBytes(reference, blob);
    const downloadURL = await getDownloadURL(reference);

    const userRef = doc(db, 'users', currentUserUid);
    await updateDoc(userRef, {
      profileImageUrl: downloadURL,
    });

    setProfileImage(downloadURL);
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    Alert.alert('Error', 'There was an error uploading your profile image.');
  }
};

const handleDeleteProfileImage = async () => {
  const currentUserUid = auth.currentUser.uid;
  const storage = getStorage();
  const reference = storageRef(storage, profileImage);

  try {
    await deleteObject(reference);
    const userRef = doc(db, 'users', currentUserUid);
    await updateDoc(userRef, {
      profileImageUrl: null,
    });

    setProfileImage(null);
  } catch (error) {
    console.error('');
    
  }
};

 return (
    <ScrollView style={styles.container}>

{/* 
     <View style={styles.settingOption}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingLabel}>Text Alignment</Text>
        <View style={styles.inlinePicker}>
          <Button title="Left" onPress={() => setTextAlignment('left')} />
          <Button title="Right" onPress={() => setTextAlignment('right')} />
          <Button title="Justify" onPress={() => setTextAlignment('justify')} />
        </View>
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingLabel}>Page Animation</Text>
        <View style={styles.inlinePicker}>
          <Button title="None" onPress={() => setPageAnimation('none')} />
          <Button title="Slide" onPress={() => setPageAnimation('slide')} />
          <Button title="Curl" onPress={() => setPageAnimation('curl')} />
        </View>
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
      <View style={styles.modalContainer}>
          <View style={styles.modal}>
            {/* Camera Option */}
            <TouchableOpacity style={styles.modalOption} onPress={takePhoto}>
              <FontAwesome5 name="camera" size={24} color="white" />
              <Text style={styles.modalOptionText}>Camera</Text>
            </TouchableOpacity>
            {/* Gallery Option */}
            <TouchableOpacity style={styles.modalOption} onPress={pickImage}>
              <FontAwesome5 name="images" size={24} color="white" />
              <Text style={styles.modalOptionText}>Gallery</Text>
            </TouchableOpacity>
            {/* Cancel Option */}
            <TouchableOpacity style={styles.modalOption} onPress={() => setModalVisible(false)}>
              <FontAwesome name="close" size={24} color="white" />
              <Text style={styles.modalOptionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
     
      </Modal>

      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.profilePlaceholder}>
              <AntDesign name="plus" size={24} color="purple" />
            </View>
          )}
        </TouchableOpacity>
        {profileImage && (
          <TouchableOpacity onPress={handleDeleteProfileImage} style={styles.deleteIcon}>
            <MaterialIcons name="delete" size={32} color="purple" />
          </TouchableOpacity>
        )}
      </View>

 
        {/* Input for Email */}
      <View style={{ marginTop: 10 }}>




    <View style={{ flexDirection: "row", alignItems: "center" , marginTop:-10 }}>
  <View style={{ flexDirection: "row", alignItems: "center", gap: -2 ,marginTop:-20}}>
    <Icon name="user" size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginLeft: 10 }} />
<Text style={{ fontSize: 18, color: "purple", marginLeft: 16 }}>First Name</Text>
</View>
  
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom:-2 }}>
     <TouchableOpacity onPress={() => setIsEditingFirstName(true)}>
  <Icon name="pencil" size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginTop: 25, marginRight: -100,marginBottom:-30 ,marginLeft:196}} />
  </TouchableOpacity>
  <TextInput
    value={FirstName}
    onChangeText={(text) => setFirstName(text)}
    secureTextEntry={false}
    editable={isEditingFirstName}
    placeholderTextColor="#318CE7"
    style={{
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingTop: 55,
      // Adds space above the text input
      width: 290,
      marginLeft:-200,
    }}
  />
</View>

</View>

 

 <View style={{ flexDirection: "row", alignItems: "center" , marginTop:-10 }}>
  <View style={{ flexDirection: "row", alignItems: "center", gap: -2 ,marginTop:-20}}>
     <Icon name="user" size={24} color="#b768a2 | rgb(183,104,162)"  style={{ marginLeft:10}}/>
    <Text style={{ fontSize: 18, color: "purple", marginLeft: 16 }}>Last Name</Text>
  </View>
   <View style={{ flexDirection: "row", alignItems: "center", marginBottom:-2 }}>
    <TouchableOpacity onPress={() => setIsEditingLastName(true)}>
  <Icon name="pencil"  size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginTop: 25, marginRight: -100,marginBottom:-30 ,marginLeft:197}} />
  </TouchableOpacity>
  <TextInput
    value={LastName}
    onChangeText={(text) => setLastName(text)}
    secureTextEntry={false}
    editable={isEditingLastName}
    placeholderTextColor="#318CE7"
    style={{
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingTop: 55, // Adds space above the text input
      width: 290,
      marginLeft:-200,
    }}
  />
</View>
</View>

<View style={{ flexDirection: "row", alignItems: "center" , marginTop:-10 }}>
  <View style={{ flexDirection: "row", alignItems: "center", gap: -2 ,marginTop:-20}}>
    <Ionicons name="md-call" size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginLeft: 10 }} />
<Text style={{ fontSize: 18, color: "purple", marginLeft: 16 }}>Phone Number</Text>
</View>
  
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom:-2 }}>
     <TouchableOpacity onPress={() => setIsEditingPhoneNumber(true)}>
  <Icon name="pencil"  size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginTop: 25, marginRight: -210,marginBottom:-30 ,marginLeft:162}} />
  </TouchableOpacity>
  
  <TextInput
    value={PhoneNumber}
    onChangeText={(text) => setPhoneNumber(text)}
    secureTextEntry={false}
    placeholderTextColor="#318CE7"
    editable={isEditingPhoneNumber}
    style={{
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingTop: 55,
     // Adds space above the text input
      width: 290,
      marginLeft:-114,
    }}
  />
</View>

</View>


<View style={{ flexDirection: "row", alignItems: "center" , marginTop:-10 }}>
  <View style={{ flexDirection: "row", alignItems: "center", gap: -2 ,marginTop:-20}}>
   <Icon name="envelope" size={24} color="#b768a2 | rgb(183,104,162)" style={{ marginLeft: 10 }} />


<Text style={{ fontSize: 18, color: "purple", marginLeft: 16 }}>Email</Text>
</View>
  
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom:-2 }}>
  
  
  <TextInput
    value={Email}
    onChangeText={(text) => setEmail(text)}
    secureTextEntry={false}
    placeholderTextColor="#318CE7"
    style={{
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingTop: 55,
     // Adds space above the text input
      width: 290,
      marginLeft:-43,
    }}
  />
</View>

</View>

         <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
      </View>

       {/* Save Changes Button */}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
   

 
  phoneInputContainer: {
    marginBottom: 20,
    borderColor:  '#318CE7',
  },
  saveButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    width:170,
    marginLeft:90,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

   modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

   modal: {
    backgroundColor: '#b768a2 | rgb(183,104,162)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOption: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalOptionText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16,
  },

 

   

   profileImageContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'purple',
  },

  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

   inlinePicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  settingLabel: {
    fontSize: 16,
  },
  pickerStyle: {
    width: 100,
  },
  profilePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#b768a2 | rgb(183,104,162)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    top: 50, // Adjust top as per your design requirement
    right: 60, // Adjust right as per your design requirement
  },
});

export default SettingScreen;