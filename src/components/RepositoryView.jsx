import { useQuery } from "@apollo/client"
import { FlatList, StyleSheet, View } from "react-native"
import { useParams } from "react-router-native"
import { GET_REPOSITORY } from "../graphql/queries"

import RepositoryItem from "./RepositoryItem"
import { ItemSeparator } from "./RepositoryListContainer"
import ReviewItem from "./ReviewItem"
import Text from "./Text"

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column'
  },
})

const RepositoryView = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
		fetchPolicy: "cache-and-network",
  })

    // Get the nodes from the edges array
  const reviewNodes = data
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];

  if (loading) {
    return <></>
  }

  return (
    <View>
      <RepositoryItem item={data.repository} />
      {reviewNodes.length !== 0
        ?
          <FlatList
            data={reviewNodes}
            style={styles.flexContainer}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={ReviewItem}
            keyExtractor={item => item.id}
          />
        :
          <View>
            <Text>No Reviews Yet</Text>
          </View>
      }

    </View>

  )
}

export default RepositoryView