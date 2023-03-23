import { StyleSheet, Text } from 'react-native';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  text: {
    color: "white",
    margin: 5,
  },
})

const AppBarTab = ({ name, route }) => {
  return (
    <Link to={route}>
      <Text style={styles.text}>{name}</Text>
    </Link>
  )
}

export default AppBarTab