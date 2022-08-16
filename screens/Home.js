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
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';

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

  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // add new review, pass it down to form component
  const addReview = (review) => {
    review.key = uuid();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
      // new review should appear at the top, so pass it before the rest of the reviews
    });
    setModalOpen(false);
    // close the modal after submission
  };

  return (
    <View style={globalStyles.container}>
      {/* <Button title='goto review' onPress={pressHandler} /> */}

      {/* MODAL */}
      {/* import modal and set its visibility to state and give it animation */}
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }} // pass multiple styles
            onPress={() => setModalOpen(false)}
          />
          <Text style={globalStyles.title}>Add a Review</Text>
          {/* addReview function passed as props */}
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      {/* OPEN MODAL ICON */}
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      {/* REVIEWS */}
      <FlatList
        data={reviews} // pass state
        renderItem={(
          { item } // destructure each item to render out
        ) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)} // navigate to details page while passing in the items info
          >
            {/* wrap the info in Card component, pass the info down as props.children */}
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
    marginBottom: 40,
  },
});
