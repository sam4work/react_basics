import { createContext, useState } from "react";

export const UserContext = createContext(null)



// eslint-disable-next-line react/prop-types
export default function MyUserContext({ children }) {

	const [user, setUser] = useState(null)

	return (
		<UserContext.Provider value={{
			user, setUser
		}}>
			{children}
		</UserContext.Provider>
	)
}