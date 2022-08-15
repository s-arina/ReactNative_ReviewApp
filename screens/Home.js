import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  // destruct navigation prop

  // press to navigate function example
  const pressHandler = () => {
    navigation.navigate('Review Details');
    // navigation.push('Review Details')
    // .push/.pop and .goBack() also work for more control if needed
  };

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final Fantasy"',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      {/* <Button title='goto review' onPress={pressHandler} /> */}
      {/* import modal and set its visibility to state and give it animation */}
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          {/* close icon that changes modal state to false */}
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />

          <Text>Modal text</Text>
        </View>
      </Modal>
      {/* open icon that changes modal state to false */}
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews} // pass state
        renderItem={(
          { item } // destructure each item to render out
        ) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)} // navigate to details page while passing in the items info
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 50,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
  },
});
