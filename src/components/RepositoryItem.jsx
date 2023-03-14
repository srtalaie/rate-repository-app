import { Image, StyleSheet, View } from "react-native"

import theme from "../theme"
import Text from './Text'

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  flexContainer: {
    flexDirection: 'column',
    marginTop: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    color: theme.colors.secondary,
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    borderRadius: "5px",
    display: "flex",
    alignSelf: "start",
    padding: "4px",
  },
  languageTagText: {
    color: "white",
  },
  flexImgTextSection: {
    flexDirection: 'row',
  },
  flexTextSection: {
    alignSelf: "center",
    margin: "10px",
  },
  flexStatSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
  },
})

const RepositoryItem = ({ item }) => {
  const numberFormatter = (num) => {
    let formattedString = null
    //If num > 1000 append k to end
    if (num > 1000) {
      formattedString = `${(num / 1000).toFixed(1)}k`
      return formattedString
    } else {
      return num
    }
  }
  return (
    <View key={item.id} style={styles.flexContainer}>
      <View style={styles.flexImgTextSection}>
        <View> 
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.img} />
        </View>
        <View style={styles.flexTextSection}>
          <View>
            <View>
              <Text fontWeight="bold">{item.fullName}</Text>
            </View>
            <View>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.languageTag}>
              <Text style={styles.languageTagText}>{item.language}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.flexStatSection}>
        <View>
          <Text fontWeight="bold">{numberFormatter(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text fontWeight="bold">{numberFormatter(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text fontWeight="bold">{numberFormatter(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem