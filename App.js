import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import phrases from "./phrases";

import Phrase from "./components/Phrase";
import ButtonText from "./components/ButtonText";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(
    (Math.random() * phrases.length) | 0
  );

  getRandomArbitrary = () => {
    let n = Math.random() * phrases.length | 0
    setRandomNumber(n);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#2B2D3C", flex: 1 }}>
      <View style={styles.container}>
        <Phrase text={phrases[randomNumber]} />
        <ButtonText
          text={"Prossimo"}
          getRandomArbitrary={this.getRandomArbitrary}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: hp("5%"),
    backgroundColor: "#2B2D3C",
    alignItems: "center",
    justifyContent: "center"
  },
  button: { marginTop: hp("3%") }
});

export default App;
