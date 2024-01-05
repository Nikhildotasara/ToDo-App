import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUp.js";
import SignInImage from "../../assets/signIn.png";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";
function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    console.log("User directed to Mobile Verification");
    navigation.navigate("MobileVerification");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={SignInImage}></Image>
      <Text style={styles.signUpText}>Sign up</Text>

      <View style={styles.formArea}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="JohnDoe@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={handleSignUp} style={styles.submitButton}>
          <Text>Sign up</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.connectWith}>Or Connect with</Text>

          <View style={styles.mediaHandlesContainer}>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={google} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={twitter} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={apple}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
