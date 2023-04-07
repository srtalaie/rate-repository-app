import { gql } from "@apollo/client"

import { REPO_DETAILS } from "./fragments"

export const GET_REPOSITORIES = gql`
	query {
		repositories {
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
					}
				}
			}
			...RepoDetails
		}
	}
	${REPO_DETAILS}
`
