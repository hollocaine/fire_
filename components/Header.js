
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//import Menu from '../components/Menu';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.menuBtn}>
        <FontAwesomeIcon icon={faBars} onPress={props.openMenu} />
      </View>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.menuBtn}>
        <FontAwesomeIcon icon={faUser} onPress={props.editProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 30,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    paddingTop: 8,
    fontWeight: 'bold'
  },
  menuBtn: {
    color: 'white',
    fontSize: 18,
    margin: '3%'
  }
});

export default Header;
