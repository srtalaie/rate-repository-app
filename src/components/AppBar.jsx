import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'

import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: 'row',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" route='/' />
        <AppBarTab name="Sign In" route='/signin' />
      </ScrollView>
    </View>
  )
}

export default AppBar