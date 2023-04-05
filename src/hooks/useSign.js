import { useMutation } from "@apollo/client"
import AuthStorage from "../utils/authStorage"

import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHENTICATE)
	const authStorage = new AuthStorage("auth")

	const signIn = async ({ username, password }) => {
		const response = await mutate({
			variables: { credentials: { username, password } },
		})
		await authStorage.setAccessToken(response.data.authenticate.accessToken)
		return response
	}

	return [signIn, result]
}

export default useSignIn
