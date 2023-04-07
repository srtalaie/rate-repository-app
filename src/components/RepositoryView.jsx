import { useQuery } from "@apollo/client"
import { useParams } from "react-router-native"
import { GET_REPOSITORY } from "../graphql/queries"

import RepositoryItem from "./RepositoryItem"

const RepositoryView = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
		fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <></>
  }

  return (
    <RepositoryItem item={data.repository} />
  )
}

export default RepositoryView