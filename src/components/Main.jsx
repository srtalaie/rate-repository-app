import { StyleSheet, View } from 'react-native'

import AppBar from './AppBar'
import RepositoryList from "./RepositoryList"
import Text from './Text'

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
      <RepositoryList />
    </View>
  )
}

export default Main