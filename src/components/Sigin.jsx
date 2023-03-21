import { Form, Formik } from 'formik';
import { Button, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignIn = () => {
  const onSubmit = async (values) => {
    console.log(await values);
  };

  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View>
          <Text>Sign in</Text>
          <Form onSubmit={values => console.log(values)}>
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