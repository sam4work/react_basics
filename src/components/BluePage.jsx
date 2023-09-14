import { useContext } from "react"
import { MyfamilyNameContext } from "../contexts/FamilyNameContext"

export default function BluePage() {

	const user = useContext(MyfamilyNameContext)

	return (
		<div>
			<p>BluePage</p>

			<p>
				{
					JSON.stringify(user)
				}
			</p>


		</div>
	)
}
