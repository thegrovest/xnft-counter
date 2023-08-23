// App.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BOX_SIZE = 50;

const ExamplesScreen = () => {
  const [score, setScore] = useState(0);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    moveBox();
  }, []);

  const moveBox = () => {
    const x = Math.random() * (width - BOX_SIZE);
    const y = Math.random() * (height - BOX_SIZE);
    setBoxPosition({ x, y });
    setTimeout(moveBox, 1000);
  };

  const handleTap = () => {
    setScore(score + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <TouchableOpacity style={[styles.box, { top: boxPosition.y, left: boxPosition.x }]} onPress={handleTap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  score: {
    fontSize: 24,
    margin: 20,
  },
  box: {
    position: 'absolute',
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'tomato',
  },
});

export default ExamplesScreen;