import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
const QuestionScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Question</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default QuestionScreen;
