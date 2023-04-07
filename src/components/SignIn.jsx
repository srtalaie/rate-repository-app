import { Formik } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigate } from "react-router-native";
import * as yup from 'yup';

import useSignIn from '../hooks/useSign';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
})

export const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <View style={styles.form}>
        <FormikTextInput name="username" placeholder="username" testID="usernameField"/>
        <FormikTextInput name="password" placeholder="password" testID="passwordField" secureTextEntry />
        <Button onPress={onSubmit} testID="submitButton" title="Submit" />
      </View>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signIn({ username, password })
      console.log(data)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username too short, must be at least 3 characters long.')
      .required('Username is required.'),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character.")
      .required('Password is required.'),
  })
  
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}

    >
      {({ handleSubmit }) => (<SignInForm onSubmit={handleSubmit} />)}
    </Formik>
  )
}

export default SignIn