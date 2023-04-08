import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { GET_CURRENT_USER } from "../graphql/queries"

const useUserReviews = () => {
	const { data, error, loading } = useQuery(GET_CURRENT_USER, {
		variables: { includeReviews: true },
		fetchPolicy: "cache-and-network",
	})

	const [reviews, setReviews] = useState()

	const fetchReviews = async () => {
		if (data !== undefined && data.me.reviews !== undefined) {
			setReviews(data.me.reviews)
		}
	}

	useEffect(() => {
		fetchReviews()
	}, [data])

	if (error !== undefined) {
		console.log(error)
	}

	return { reviews, loading, refetch: fetchReviews }
}

export default useUserReviews
