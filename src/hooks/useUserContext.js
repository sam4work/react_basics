import { useContext } from "react"
import { UserContext } from "../contexts/MyUserContext"

export default function useUserContext() {
	const user = useContext(UserContext)

	return user ?? null
}
