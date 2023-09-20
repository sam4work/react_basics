import useUserContext from "../hooks/useUserContext";

export default function Login() {

	const { user, setUser } = useUserContext()


	const handleSubmit = (e) => {
		e.preventDefault();


		const userInput = new FormData(e.target);

		setUser({
			firstName: userInput.get("firstName"),
			lastName: userInput.get("lastName"),
			email: userInput.get("email"),
			password: userInput.get("password"),
		})


	}



	return (
		<div>
			<p>
				{
					JSON.stringify(user)
				}
			</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="firstName"></label>
					<input type="text" defaultValue={"John"} id="firstName" name="firstName" required />
				</div>
				<div>
					<label htmlFor="lastName"></label>

					<input type="text" defaultValue={"Doe"} id="lastName" name="lastName" required />
				</div>
				<div>
					<label htmlFor="email"></label>
					<input type="text" defaultValue={"johndoe@example.com"} id="email" name="email" required />
				</div>
				<div>
					<label htmlFor="password"></label>
					<input type="text" defaultValue={"password1234"} id="password" name="password" required />
				</div>

				<div>
					<button type="submit" >
						Login
					</button>
				</div>

			</form>
		</div>
	)
}
