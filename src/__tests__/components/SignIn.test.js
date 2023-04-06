import {
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react-native"
import { Formik } from "formik"
import { SignInForm } from "../../components/SignIn"

describe("SignIn", () => {
	describe("SignInContainer", () => {
		it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
			const onSubmit = jest.fn()
			const initialValues = {
				username: "",
				password: "",
			}
			render(
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
				</Formik>
			)

			fireEvent.changeText(screen.getByTestId("usernameField"), "shaneSpain")
			fireEvent.changeText(screen.getByTestId("passwordField"), "Test1234!")
			fireEvent.press(screen.getByTestId("submitButton"))

			await waitFor(() => {
				expect(onSubmit).toHaveBeenCalledTimes(1)
				expect(onSubmit.mock.calls[0][0]).toEqual({
					username: "shaneSpain",
					password: "Test1234!",
				})
			})
		})
	})
})
