import { FlatList, StyleSheet, View } from 'react-native'

import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  flexContainer: {
    flexDirection: 'column'
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      style={styles.flexContainer}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
    />
  )
}

export default RepositoryListContainer