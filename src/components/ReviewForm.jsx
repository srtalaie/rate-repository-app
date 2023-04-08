import { Formik } from 'formik';
import { Button, StyleSheet, View } from 'react-native-web';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';

import useReviewCreation from '../hooks/useReviewCreation';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
})

export const Form = ({ onSubmit }) => {
  return (
    <View>
      <View style={styles.form}>
        <FormikTextInput name="ownerName" placeholder="Repository Owner" testID="repoOwnerField"/>
        <FormikTextInput name="repositoryName" placeholder="Repository Name" testID="repoNameField" />
        <FormikTextInput name="rating" testID="ratingField" />
        <FormikTextInput name="text" placeholder="Review" testID="reviewField" multiline />
        <Button onPress={onSubmit} testID="submitButton" title="Create a Review" />
      </View>
    </View>
  )
}

const ReviewForm = () => {
  const [createReview] = useReviewCreation()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, text })
      console.log(data)
      navigate(`/repo/${data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .min(3, 'Username too short, must be at least 3 characters long.')
      .required('Repository Owner Username is required.'),
    repositoryName: yup
      .string()
      .required('Repository Name is required.'),
    rating: yup
      .number()
      .integer()
      .min(0)
      .max(100)
      .required('Repo Rating from 0 to 100 is required.'),
    text: yup
      .string()
  })

  return (
    <Formik
      initialValues={{ ownerName: "", repositoryName: "", rating: 0, text: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}

    >
      {({ handleSubmit }) => (<Form onSubmit={handleSubmit} />)}
    </Formik>
  )
}

export default ReviewForm