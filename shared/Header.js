import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/heart_logo.png')}
        style={styles.headerIcon}
      />
      <Text style={styles.headerTitle}>GameZone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'PoppinsSB',
    fontSize: 18,
    letterSpacing: 1,
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
