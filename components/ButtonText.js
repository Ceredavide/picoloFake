import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ButtonText = ({ text, getRandomArbitrary }) => {
  return (
    <TouchableOpacity
      onPress={() => getRandomArbitrary()}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: hp("8%"),
    height: hp("9%"),
    width: wp("50%"),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  text: {
      fontSize: hp("3%")
  }
});

export default ButtonText;
