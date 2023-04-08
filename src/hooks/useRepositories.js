import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
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

	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
		variables: {
			orderBy: orderVariables.order,
			orderDirection: orderVariables.dir,
			searchKeyword: searchKeyword,
		},
	})

	const [repositories, setRepositories] = useState()

	const fetchRepositories = async () => {
		if (data !== undefined && data.repositories !== undefined) {
			setRepositories(data.repositories)
		}
	}

	useEffect(() => {
		fetchRepositories()
	}, [data])

	if (error !== undefined) {
		console.log(error)
	}

	return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
