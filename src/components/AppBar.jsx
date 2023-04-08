import { useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'

import { SIGNED_IN } from '../graphql/queries'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: 'row',
  },
})

const AppBar = () => {
  const { data } = useQuery(SIGNED_IN,{
    fetchPolicy: 'cache-and-network',
  })
  const loggedIn = data && data.me
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" route='/' />
        { loggedIn
          ? <AppBarTab name="Sign Out" route='/signout' />
          : <AppBarTab name="Sign In" route='/signin' />
        }
        <AppBarTab name="Create a Review" route='/review' />
      </ScrollView>
    </View>
  )
}

export default AppBar