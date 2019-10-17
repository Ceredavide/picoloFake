import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Phrase = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp("5%"),
    backgroundColor: "#ffbf86",
    height: hp("60%"),
    width: wp("88%"),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: hp("5%")
  }
});

export default Phrase;
