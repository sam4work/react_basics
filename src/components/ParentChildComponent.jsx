// import { useContext } from "react"
import ChildOneComponent from "./ChildOneComponent"
// import { MyfamilyNameContext } from "../contexts/FamilyNameContext"

export default function ParentChildComponent() {
	// const familyName = useContext(MyfamilyNameContext)
	return (
		<div>
			<p>
				ParentChildComponent
			</p>

			<ChildOneComponent />
		</div>
	)
}
