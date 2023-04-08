import { useApolloClient, useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useReviewCreation = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW)
	const apolloClient = useApolloClient()

	const createReview = async ({ ownerName, repositoryName, rating, text }) => {
		const response = await mutate({
			variables: {
				review: { ownerName, repositoryName, rating: parseInt(rating), text },
			},
		})
		apolloClient.resetStore()
		return response
	}

	return [createReview, result]
}

export default useReviewCreation
