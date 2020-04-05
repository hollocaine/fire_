import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
const LocationInput = props => {
  const [enteredLocation, setEnteredLocation] = useState('');
  const locationInputHandler = enteredLocation => {
    setEnteredLocation(enteredLocation);
  };

  const addLocationHandler = () => {
    props.onAddLocation(enteredLocation);
    setEnteredLocation('');
  };
  return (
    <Modal visible={props.visible} animatedType="slide">
      <View style={styles.header}>
        <Header title="Check" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Location"
          style={styles.input}
          onChangeText={locationInputHandler}
          value={enteredLocation}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Icon.Button
              name="times"
              color="white"
              onPress={props.onCancel}
            ></Icon.Button>
          </View>
          <View style={styles.button}>
            <Icon.Button
              name="plus"
              title="Add"
              onPress={addLocationHandler}
            ></Icon.Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    borderWidth: 1,
    height: 36,
    marginBottom: 10,
    padding: 5
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%'
  },
  button: {
    width: '13%'
  }
});
export default LocationInput;
