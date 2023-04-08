import { Formik } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigate } from "react-router-native";
import * as yup from 'yup';

import useSignIn from '../hooks/useSign';
import useSignUp from '../hooks/useSignUp';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
})

export const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <View style={styles.form}>
        <FormikTextInput name="username" placeholder="username" testID="usernameField"/>
        <FormikTextInput name="password" placeholder="password" testID="passwordField" secureTextEntry />
        <FormikTextInput name="passwordConfirmation" placeholder="password" testID="passwordConfirmationField" secureTextEntry />
        <Button onPress={onSubmit} testID="submitButton" title="Sign Up" />
      </View>
    </View>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signUp({ username, password })
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character.")
      .required('Password is required.'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirmation is required')
  });
  
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}

    >
      {({ handleSubmit }) => (<SignUpForm onSubmit={handleSubmit} />)}
    </Formik>
  )
}

export default SignUp