import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/heart_logo.png')}
        style={styles.headerBackground}
      />
      <Text>GameZone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerBackground: {
    width: 20,
    height: 20,
  },
});
