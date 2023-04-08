import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';


import AppBar from './AppBar';
import RepositoryList from "./RepositoryList";
import RepositoryView from './RepositoryView';
import ReviewForm from './ReviewForm';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

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
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repo/:id" element={<RepositoryView />}  exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="/myreviews" element={<UserReviews />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main