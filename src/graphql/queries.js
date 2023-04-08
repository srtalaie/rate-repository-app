import { gql } from "@apollo/client"

import { REPO_DETAILS } from "./fragments"

export const GET_REPOSITORIES = gql`
	query repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
		) {
			edges {
				node {
					...RepoDetails
				}
			}
		}
	}
	${REPO_DETAILS}
`

export const SIGNED_IN = gql`
	query {
		me {
			id
			username
		}
	}
`
export const GET_CURRENT_USER = gql`
	query getCurrentUser($includeReviews: Boolean = false) {
		me {
			username
			reviewCount
			id
			createdAt
			reviews @include(if: $includeReviews) {
				edges {
					node {
						id
						repositoryId
						user {
							username
						}
						createdAt
						text
						rating
					}
				}
			}
		}
	}
`

export const GET_REPOSITORY = gql`
	query Repositories($repositoryId: ID!) {
		repository(id: $repositoryId) {
			url
			reviews {
				edges {
					node {
						text
						rating
						user {
							username
						}
						createdAt
						id
						repositoryId
					}
				}
			}
			...RepoDetails
		}
	}
	${REPO_DETAILS}
`
