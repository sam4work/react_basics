import { createContext } from "react";

export const UserContext = createContext(null)

const user = {
	firstName: "John",
	lastName: "Doe",
	email: "johndoe@gmail.com",
	password: "1234",
}

// eslint-disable-next-line react/prop-types
export default function MyUserContext({ children }) {

	return (
		<UserContext.Provider value={user}>
			{children}
		</UserContext.Provider>
	)
}