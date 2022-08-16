import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
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
      body: `From its mysterious opening to its action-packed conclusion, The Legend of Zelda: Breath of the Wild is a revolution for Nintendo's revered series. It's both a return to form and a leap into uncharted territory, and it exceeds expectations on both fronts. The game takes designs and mechanics perfected in other games and reworks them for its own purposes to create something wholly new, but also something that still feels quintessentially like a Zelda game. It's a truly magical work of art that embodies Nintendo's unique talents, and a game that everyone should play regardless of their affinity for the series' past.`,
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: `Sword and Shield introduce players to the new Galar region. Inspired by the UK, this region is characterful and utterly full of personality. It has a cohesive identity that affectionately caricatures British pop culture and speech, while each town and city that make it up still manages to have its own utterly distinct look, resulting in a region that’s a playful mix of modernity and mythology. We had a niggling feeling as we wandered around the suspiciously clean cities and green rolling hills that this is potentially what some have convinced themselves the pre-EU UK once looked like. Galar is idyllic bordering on fantastical.`,
      key: '2',
    },
    {
      title: 'Not So "Final Fantasy"',
      rating: 3,
      body: `The storytelling throughout the main campaign is very enjoyable — bolstered by certain scenes that quite simply blew us away — and the additional beats only serve to enrich the experience. Square Enix could have quite easily buggered the whole thing up, but as it stands, it feels like the plot has been given the respect that it deserves. That said, the story probably won't resonate quite so well if you're new to Final Fantasy VII. There are times when the narrative relies heavily on nostalgia, presenting characters, scenes, or concepts in ways that'll seem downright weird if you're coming into this completely blind.`,
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
        <TouchableWithoutFeedback // wrap code to dismiss keyboard after submission
          onPress={() => Keyboard.dismiss()}
        >
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
        </TouchableWithoutFeedback>
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
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 40,
  },
});
