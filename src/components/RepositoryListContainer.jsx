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

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories, navigate }) => {
  const PressableItem = ({ item }) => {
    const onPress = () => {
      console.log('pressed', item.id)
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
    />
  )
}

export default RepositoryListContainer