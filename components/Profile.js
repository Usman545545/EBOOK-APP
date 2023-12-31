import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { signOut } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from "../firebase";
import { doc, getDoc } from 'firebase/firestore';

// DropdownItem component
const DropdownItem = ({ label, onPress, iconName }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        onPress();
      }}
      style={({ pressed }) => [
        styles.dropdownItem,
        pressed ? styles.dropdownItemPressed : null,
      ]}
    >
      <Ionicons
        name={iconName}
        size={22}
        color={isPressed ? 'white' : 'black'}
        style={styles.iconStyle}
      />
      <Text
        style={[
          styles.dropdownText,
          isPressed ? styles.dropdownTextPressed : null,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const authUser = auth.currentUser;
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFullName(`${userData.firstName} ${userData.lastName}`);
        }
      }
    };
    getUserData();
  }, []);

  const navigateToSettings = () => {
    setDropdownVisible(false);
    navigation.navigate('Setting');
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Pressable
          onPress={() => setDropdownVisible(!dropdownVisible)}
          style={dropdownVisible ? styles.profilePressed : null}
        >
          <View style={styles.profileContent}>
            <Text style={styles.profileInitials}>
              {fullName ? fullName.split(' ').map(n => n[0]).join('').toUpperCase() : 'J'}
            </Text>
            <Text style={styles.userName}>{fullName}</Text>
          </View>
        </Pressable>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <DropdownItem label="Settings & Beta" onPress={navigateToSettings} iconName="settings-outline" />
            <View style={styles.separator} />
            <DropdownItem label="Log out" onPress={signOutUser} iconName="log-out-outline" />
          </View>
        )}
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  profileSection: {
    position: 'absolute',
    top: 20,
    left: 30,
    zIndex: 10,
  },
  profilePressed: {
  backgroundColor: 'grey',
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  borderTopRightRadius: 10, // Smaller radius on the right top
  borderBottomRightRadius: 10, // Smaller radius on the right bottom
  width: 184,
  padding:6.5
},

  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInitials: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#b768a2 | rgb(183,104,162)",
    textAlign: 'center',
    lineHeight: 40,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  userName: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    left: 5,
    backgroundColor: 'white',
    width: 180,
    borderRadius: 7,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    elevation: 6,
    zIndex: 10,
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    marginRight: 6,
  },

  dropdownItemPressed: {
    backgroundColor: "#b768a2 | rgb(183,104,162)",

    borderRadius:3,// Use the exact color you want
  },
  dropdownTextPressed: {
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#e1e1e1', // Use the exact color you want
  },
});

export default Profile;
