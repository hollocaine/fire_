import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LocationItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.submitButton}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  submitButton: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange'
  }
});

export default LocationItem;
