import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab name="Repositories" />
    </View>
  )
}

export default AppBar