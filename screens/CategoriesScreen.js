import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <TouchableOpacity style={styles.links}>
        <View style={styles.link}>
          <Button
            title="Locations"
            onPress={() => {
              props.navigation.navigate({ routeName: 'Location' });
            }}
          />
        </View>
        <View style={styles.link}>
          <Button
            title="Check"
            onPress={() => {
              props.navigation.navigate({ routeName: 'Check' });
            }}
          />
        </View>
        <View style={styles.link}>
          <Button
            title="Report"
            onPress={() => {
              props.navigation.navigate({ routeName: 'Report' });
            }}
          />
        </View>
        <View style={styles.link}>
          <Button
            title="Locations"
            onPress={() => {
              props.navigation.navigate({ routeName: 'Location' });
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  links: {
    width: '30%'
  },
  link: {
    marginBottom: 1
  }
});

export default CategoriesScreen;
