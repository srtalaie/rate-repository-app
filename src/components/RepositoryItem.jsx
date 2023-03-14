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
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    borderRadius: "5px",
    padding: "2",
    display: "flex",
    alignSelf: "start",
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
    justifyContent: "space-around"
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.flexContainer}>
      <View style={styles.flexImgTextSection}>
        <View> 
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.img} />
        </View>
        <View style={styles.flexTextSection}>
          <View>
            <View>
              <Text color="secondary">{item.fullName}</Text>
            </View>
            <View>
              <Text color="secondary">{item.description}</Text>
            </View>
            <View style={styles.languageTag}>
              <Text color="secondary">{item.language}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.flexStatSection}>
        <View>
          <Text color="secondary">{item.stargazersCount}</Text>
          <Text color="secondary">Stars</Text>
        </View>
        <View>
          <Text color="secondary">{item.forksCount}</Text>
          <Text color="secondary">Forks</Text>
        </View>
        <View>
          <Text color="secondary">{item.reviewCount}</Text>
          <Text color="secondary">Reviews</Text>
        </View>
        <View>
          <Text color="secondary">{item.ratingAverage}</Text>
          <Text color="secondary">Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem