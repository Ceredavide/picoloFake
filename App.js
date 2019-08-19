import React from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

import Phrase from './components/Phrase';
import ButtonText from './components/ButtonText';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        'bella',
        'come va',
        'tutto bene graz',
        '6x8',
        'mamacita',
        'mandarino',
        'macbook',
        'pritha'
      ],
      randomNumber: Math.random() * 7 | 0,
    }
  }

  getRandomArbitrary = () => {
    let n = Math.random() * this.state.text.length | 0;
    this.setState({ randomNumber: n })
  }
  render() {
    return (
      <View style={styles.container}>
        <Phrase text={this.state.text[this.state.randomNumber]} />
        <ButtonText text={'ciao'} style={styles.button} getRandomArbitrary={this.getRandomArbitrary} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
