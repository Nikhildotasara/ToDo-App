import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./MobileVerification.js";
import logo from "../../assets/verification.png";
import { useNavigation } from "@react-navigation/native";
function MobileVerification() {
  const navigation = useNavigation();
  const handleVerify = () => {
    console.log("Verified and redirected to verify the otp");
    navigation.navigate("MobileOTPVerification");
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Mobile Verification</Text>
        <Text style={styles.description}>
          Enter your mobile number to recieve OTP
        </Text>
        <Text style={styles.enterCode}>Enter the Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number  here"
          placeholderTextColor="white"
        />

        <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
          <Text style={styles.verifyText}>Get the Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MobileVerification;
