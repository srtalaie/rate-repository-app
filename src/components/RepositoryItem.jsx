import { Image, StyleSheet, View } from "react-native";

import Text from './Text';

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
      <Text color="secondary">Full Name: {item.fullName}</Text>
      <Text color="secondary">Description: {item.description}</Text>
      <Text color="secondary">Language: {item.language}</Text>
      <Text color="secondary">Stars: {item.stargazersCount}</Text>
      <Text color="secondary">Forks: {item.forksCount}</Text>
      <Text color="secondary">Reviews: {item.reviewCount}</Text>
      <Text color="secondary">Avg. Rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem