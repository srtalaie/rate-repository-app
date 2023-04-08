import { useApolloClient } from "@apollo/client"
import { useMutation } from "@apollo/react-hooks"
import { DELETE_REVIEW } from "../graphql/mutations"

const useDeleteReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW)
	const apolloClient = useApolloClient()

	const deleteReview = async ({ id }) => {
		const response = await mutate({ variables: { id } })
		apolloClient.resetStore()
		return response
	}

	return [deleteReview, result]
}

export default useDeleteReview
