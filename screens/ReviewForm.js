import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global.js';

// import libraries
import { Formik } from 'formik';
import * as yup from 'yup';

// yup validation
const ReviewSchema = yup.object({
  title: yup.string().required('A title is required.').min(4), // must be a string, required field, and 4 chars min
  body: yup.string().required('Review cannot be empty!').min(8),
  rating: yup
    .string()
    .required('Please rate from 1-5.')
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  // must be a string, required field, and test if the number inputted is < 6 and > 0
});

export default function ReviewForm({ addReview }) {
  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
        rating: '',
      }}
      // initial fields and values
      validationSchema={ReviewSchema} // pass the form validation in here
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
            // onBlur={formikProps.handleBlur('title')}
            // onBlur will trigger the error when you leave the field, more real time validation but not while the field is being  touched
          ></TextInput>

          <Text style={globalStyles.errorText}>
            {formikProps.touched.title && formikProps.errors.title}
          </Text>
          {/* yup attaches an error to the property if it doesn't pass */}
          {/* props.touched.title checks if the field was interacted with or not (default is false) */}
          {/* now the error will only show on submission */}

          <TextInput
            multiline // multiline functionality
            style={globalStyles.input}
            placeholder='Write a review...'
            onChangeText={formikProps.handleChange('body')}
            value={formikProps.values.body}
            // onBlur={formikProps.handleBlur('body')}
          ></TextInput>

          <Text style={globalStyles.errorText}>
            {formikProps.touched.body && formikProps.errors.body}
          </Text>

          <TextInput
            style={globalStyles.input}
            placeholder='Rating (1-5)'
            onChangeText={formikProps.handleChange('rating')}
            value={formikProps.values.rating}
            // onBlur={formikProps.handleBlur('rating')}
            keyboardType='numeric'
          ></TextInput>

          <Text style={globalStyles.errorText}>
            {formikProps.touched.rating && formikProps.errors.rating}
          </Text>

          <Button
            title='SUBMIT'
            color='red'
            onPress={formikProps.handleSubmit}
            // onSubmit val are the values of the form during the time of submission
          />
        </View>
      )}
    </Formik>
  );
}
