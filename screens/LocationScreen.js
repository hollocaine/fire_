import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import LocationInput from '../components/LocationInput';
import LocationItem from '../components/LocationItem';

const LocationScreen = () => {
  const [locationNames, setLocationNames] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addLocationHandler = locationTitle => {
    setLocationNames(currentNames => [
      ...currentNames,
      {
        id: Math.random().toString(),
        value: locationTitle
      }
    ]);
    setIsAddMode(false);
  };
  const removeLocationHandler = locationId => {
    setLocationNames(currentNames => {
      return currentNames.filter(location => location.id !== locationId);
    });
  };
  const cancelLocationAddHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View>
      {/* <Header title="Check" /> */}
      <View style={styles.screen}>
        <Button title="Add New Location" onPress={() => setIsAddMode(true)} />
        <LocationInput
          visible={isAddMode}
          activeOpacity={0.7}
          onAddLocation={addLocationHandler}
          onCancel={cancelLocationAddHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={locationNames}
          renderItem={itemData => (
            <LocationItem
              id={itemData.item.id}
              onDelete={removeLocationHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  submit: {
    margin: 10,
    width: '100%'
  },
  submitButton: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange'
  }
});
export default LocationScreen;
