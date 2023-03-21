import { Form, Formik } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
});

const SignIn = () => {
  const onSubmit = async (values) => {
    console.log(await values);
  };
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username too short, must be at least 3 characters long.')
      .required('Username is required.'),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character.")
      .required('Password is required.'),
  });
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}

    >
      {({ handleSubmit }) => (
        <View>
          <Form onSubmit={values => console.log(values)} style={styles.form}>
            <FormikTextInput name="username" placeholder="username" />
            <FormikTextInput name="password" placeholder="password" secureTextEntry />
            <Button onPress={handleSubmit} title="Submit" />
          </Form>
        </View>
      )}
    </Formik>
  )
};

export default SignIn;