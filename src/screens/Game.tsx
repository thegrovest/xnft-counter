import React from 'react';
import { Text, ImageBackground, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Screen } from "../components/Screen";

export function Game() {
  const features = [
    // ... your features array ...
  ];

  return (
    <Screen style={styles.screen}>
      <ImageBackground 
        source={{ uri: 'https://bafybeihxhhzrxiv6xs2vlikwn7qwwl2clmrrkln4qtg5jc6mnfqy3upkqe.ipfs.nftstorage.link/' }}
        style={styles.countdownTimerBackground}
      >
        <TouchableOpacity style={styles.showCounter} onPress={() => {}}>
          <Text style={styles.counterText}>Coming Soon!</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  countdownTimerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50
  },
  showCounter: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white'
  },
  counterText: {
    color: 'red',        // Adjusted this line to reflect the CSS color
    fontSize: 20
  }
});

export default Game;