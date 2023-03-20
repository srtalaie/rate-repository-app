import { Formik } from 'formik';
import { Button, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik>
      <View>
        <Text>Sign in</Text>
        <FormikTextInput name="username" placeholder="username" />
        <FormikTextInput name="password" placeholder="password" secureTextEntry />
        <Button onPress={onSubmit}>Sign in</Button>
      </View>
    </Formik>
  )
};

export default SignIn;