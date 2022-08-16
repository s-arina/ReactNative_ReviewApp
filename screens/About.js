import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About GameZone</Text>
      <Text style={globalStyles.paragraph}>
        Write reviews about your favorite games and rate them!
      </Text>
    </View>
  );
}
