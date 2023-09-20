import { Link } from "react-router-dom"
import './App.css'
import useUserContext from "./hooks/useUserContext"
import Login from "./components/Login"

function App() {

	const { user } = useUserContext()

	if (!user) return <Login />


	return (
		<>
			<h1 className="text-7xl">
				Welcome to react
			</h1>

			<p>
				{
					JSON.stringify(user)
				}
			</p>

			<Link to={"/dashboard"}>
				Dashboard
			</Link>
		</>
	)
}

export default App
