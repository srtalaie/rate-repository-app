import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  flexContainer: {
    flexDirection: 'column'
  },
})

export const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories, navigate, onEndReach }) => {
  const PressableItem = ({ item }) => {
    const onPress = () => {
      navigate(`/repo/${item.id}`)
    }
    return (
      <Pressable onPress={onPress}>
        <RepositoryItem item={item} />
      </Pressable>
    )
  }
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      style={styles.flexContainer}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableItem}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryListContainer