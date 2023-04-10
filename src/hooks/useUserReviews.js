import { useQuery } from "@apollo/client"
import { GET_CURRENT_USER } from "../graphql/queries"

const useUserReviews = () => {
	const { data, error, loading, fetchMore, ...result } = useQuery(
		GET_CURRENT_USER,
		{
			variables: { includeReviews: true },
			fetchPolicy: "cache-and-network",
		}
	)

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data && data.me.reviews.pageInfo.hasNextPage

		if (!canFetchMore) {
			return
		}

		fetchMore({
			query: GET_CURRENT_USER,
			variables: {
				after: data.me.reviews.pageInfo.endCursor,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				const nextResult = {
					reviews: {
						...fetchMoreResult.reviews,
						edges: [
							...previousResult.reviews.edges,
							...fetchMoreResult.reviews.edges,
						],
					},
				}

				return nextResult
			},
		})
	}

	if (error !== undefined) {
		console.log(error)
	}

	return {
		reviews: data?.me.reviews,
		fetchMore: handleFetchMore,
		loading,
		...result,
	}
}

export default useUserReviews
