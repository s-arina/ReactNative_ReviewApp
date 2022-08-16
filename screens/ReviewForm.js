import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global.js';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
        rating: '',
      }}
      onSubmit={(values, actions) => {
        addReview(values); // submit the review
        actions.resetForm(); // clear the form after submission (even after the modal closes)
      }}
    >
      {(formikProps) => (
        // render the form fields
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder='Review title'
            onChangeText={formikProps.handleChange('title')}
            value={formikProps.values.title}
            // this is going to update the empty fields to be whatever the onChangeText is
          ></TextInput>

          <TextInput
            style={globalStyles.input}
            placeholder='Review body'
            onChangeText={formikProps.handleChange('body')}
            value={formikProps.values.body}
          ></TextInput>

          <TextInput
            style={globalStyles.input}
            placeholder='Rating (1-5)'
            onChangeText={formikProps.handleChange('rating')}
            value={formikProps.values.rating}
            keyboardType='numeric'
          ></TextInput>

          <Button
            title='SUBMIT'
            color='red'
            onPress={formikProps.handleSubmit}
          />
        </View>
      )}
      {/* initial fields and values */}
      {/* onSubmit val are the values of the form during the time of submission */}
    </Formik>
  );
}

const styles = StyleSheet.create({});
