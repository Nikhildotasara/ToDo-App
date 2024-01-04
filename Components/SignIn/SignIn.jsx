import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./SignIn.js";
import SignInImage from "../../assets/signIn.png";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={SignInImage}></Image>
      <Text style={styles.signInText}>Sign In</Text>

      <View style={styles.formArea}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput style={styles.input} placeholder="johnDoe@gmail.com" />

        <Text style={styles.labelText}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" />

        <View style={styles.otherOptions}>
          <View style={styles.rememberMeContainer}>
            <BouncyCheckbox
              onPress={() => {
                setIsChecked(!isChecked);
              }}
            />
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text>Sign In</Text>
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
          <View style={styles.noAccount}>
            <Text>Do not have an account ? </Text>
            <TouchableOpacity>
              <Text>sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignIn;
