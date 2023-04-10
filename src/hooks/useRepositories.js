import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = (selectedOrder, searchKeyword) => {
	let orderVariables = {}

	switch (selectedOrder) {
		case "highest":
			orderVariables = { order: "RATING_AVERAGE", dir: "DESC" }
			break
		case "lowest":
			orderVariables = { order: "RATING_AVERAGE", dir: "ASC" }
			break
		default:
			orderVariables = { order: "CREATED_AT", dir: "DESC" }
	}

	const { data, error, loading, fetchMore, ...result } = useQuery(
		GET_REPOSITORIES,
		{
			fetchPolicy: "cache-and-network",
			variables: {
				orderBy: orderVariables.order,
				orderDirection: orderVariables.dir,
				searchKeyword: searchKeyword,
			},
		}
	)

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data && data.repositories.pageInfo.hasNextPage

		if (!canFetchMore) {
			return
		}

		fetchMore({
			query: GET_REPOSITORIES,
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...orderVariables,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				const nextResult = {
					repositories: {
						...fetchMoreResult.repositories,
						edges: [
							...previousResult.repositories.edges,
							...fetchMoreResult.repositories.edges,
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
		repositories: data?.repositories,
		fetchMore: handleFetchMore,
		loading,
		...result,
	}
}

export default useRepositories
