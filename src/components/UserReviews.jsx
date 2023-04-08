import { useQuery } from "@apollo/client"
import { FlatList, StyleSheet, View } from "react-native"

import { GET_CURRENT_USER } from "../graphql/queries"

import { ItemSeparator } from "./RepositoryListContainer"
import ReviewItem from "./ReviewItem"
import Text from "./Text"

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column'
  },
})

const UserReviews = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
		fetchPolicy: "cache-and-network",
  })

  // Get the nodes from the edges array
  const reviewNodes = data
    ? data.me.reviews.edges.map(edge => edge.node)
    : [];

  if (loading) {
    return <></>
  }

  return (
    <View>
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

export default UserReviews