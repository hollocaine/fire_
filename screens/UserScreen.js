import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
const UserScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>User</Text>
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
export default UserScreen;
