import { StyleSheet, View } from "react-native-web";

import theme from "../theme";
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 100,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    color: theme.colors.secondary,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textArea: {
    flexGrow: 0,
    flexDirection: 'column',
    color: "white",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingLeft: 15,
  },
})

const ReviewItem = ({ item }) => {
  const dateFormatter = (date) => {
    const rawDate = new Date(date)
    let finalDate = `${rawDate.getMonth()}.${rawDate.getDay()}.${rawDate.getFullYear()}`
    return finalDate
  }

  return (
    <View key={item.id} style={styles.flexContainer} testID="reviewItem">
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text fontWeight="bold" color="primary">{item.rating}</Text>
        </View>
        <View style={styles.textArea}>
          <Text fontWeight="bold" >{item.user.username}</Text>
          <Text>{dateFormatter(item.createdAt)}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem