import { Pressable, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
})

const AppBarTab = ({ name }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  )
}

export default AppBarTab