import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Phrase from './components/Phrase';
import ButtonText from './components/ButtonText';



export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    text: 'bella'
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Phrase text={this.state.text}/> 
        <ButtonText text={'ciao'} style={styles.button}/>
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
