import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Phrase from "./components/Phrase";
import ButtonText from "./components/ButtonText";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        "bevi trecento drink se sei gay come loris di pardo",
        "come va",
        "tutto bene graz",
        "6x8",
        "mamacita",
        "mandarino",
        "macbook",
        "pritha"
      ],
      randomNumber: (Math.random() * 7) | 0
    };
  }

  getRandomArbitrary = () => {
    let n = (Math.random() * this.state.text.length) | 0;
    this.setState({ randomNumber: n });
  };
  render() {
    const { text, randomNumber } = this.state;

    return (
      <SafeAreaView style={{ backgroundColor: "#bedae6", flex: 1 }}>
        <View style={styles.container}>
        <StatusBar backgroundColor="#bedae6" barStyle="dark-content" />
          <Phrase text={text[randomNumber]} />
          <ButtonText
            text={"ciao"}
            getRandomArbitrary={this.getRandomArbitrary}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: hp("5%"),
    backgroundColor: "#bedae6",
    alignItems: "center",
    justifyContent: "center"
  },
  button: { marginTop: hp("3%") }
});
