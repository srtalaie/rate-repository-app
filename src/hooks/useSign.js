import { useMutation } from "@apollo/client"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHENTICATE)
	console.log(mutate, result)

	const signIn = async ({ username, password }) => {
		const response = await mutate({
			variables: { credentials: { username, password } },
		})
		await AsyncStorage.setItem("token", response.data.authenticate.accessToken)
		return response
	}

	return [signIn, result]
}

export default useSignIn
