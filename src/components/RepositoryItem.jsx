import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.img} />
      <Text>Full Name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Avg. Rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem