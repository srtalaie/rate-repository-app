import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';


import AppBar from './AppBar';
import RepositoryList from "./RepositoryList";
import SignIn from './Sigin';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text color="primary" fontWeight="bold">Rate Repository Application</Text>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <RepositoryList />
    </View>
  )
}

export default Main