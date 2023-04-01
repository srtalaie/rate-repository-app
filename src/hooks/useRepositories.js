import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = () => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
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
