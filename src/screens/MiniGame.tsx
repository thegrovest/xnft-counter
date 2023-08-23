import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ImageBackground, TouchableOpacity } from 'react-native';

export const MiniGame = () => {
  const [selectedNumber, setSelectedNumber] = useState<number>(generateRandomNumber(1, 100));
  const [userGuess, setUserGuess] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    if (guess === selectedNumber) {
      setFeedback('Correct!');
      Alert.alert('Congratulations!', 'You guessed the number!', [{ text: 'Restart', onPress: resetGame }]);
    } else if (guess < selectedNumber) {
      setFeedback('Too low');
    } else {
      setFeedback('Too high');
    }
  };

  const resetGame = () => {
    setSelectedNumber(generateRandomNumber(1, 100));
    setUserGuess('');
    setFeedback('');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://prod-image-cdn.tensor.trade/images/slug=bd366797-5599-417a-be03-1e43a7e3fb90/400x400/freeze=false/https://madlads.s3.us-west-2.amazonaws.com/images/8420.png' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Guess the Number!</Text>
        <TextInput 
          style={styles.input} 
          value={userGuess}
          onChangeText={setUserGuess}
          keyboardType="number-pad"
          maxLength={3}
        />
        <Text style={styles.feedback}>{feedback}</Text>
        <TouchableOpacity style={styles.button} onPress={handleGuess}>
          <Text style={styles.buttonText}>Submit Guess</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    borderColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'red',
  },
  input: {
    width: 100,
    textAlign: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    color: 'white',
    padding: 5,
  },
  feedback: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
  }
});