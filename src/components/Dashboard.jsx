import { Link } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Dashboard() {

	const user = useUserContext()

	return (
		<div>
			<h1 className="text-7xl">
				Dashboard
			</h1>

			<p>
				{
					JSON.stringify(user)
				}
			</p>
			<Link to={"/"}>
				Home
			</Link>
		</div>
	)
}
