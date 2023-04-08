import { Alert, Button, FlatList, StyleSheet, View } from "react-native"

import { ItemSeparator } from "./RepositoryListContainer"
import ReviewItem from "./ReviewItem"
import Text from "./Text"

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column'
  },
})

const UserReviews = ({ reviews, navigate, deleteReview }) => {

  const UserReviewItem = ({item}) => {
    const goToRepo = () => {
      navigate(`/repo/${item.repositoryId}`)
    }
    
    const onDelete = () =>
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => deleteReview(item.id) }
        ],
        { cancelable: false }
      );

    return (
      <View>
        <ReviewItem item={item} />
        <Button onPress={goToRepo} title="Go to Repo" />
        <Button onPress={onDelete} title="Delete Review" />
      </View>
    )
  }

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];
  
  return (
    <View>
      {reviewNodes.length !== 0
        ?
          <FlatList
            data={reviewNodes}
            style={styles.flexContainer}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={UserReviewItem}
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