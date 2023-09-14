// import { useContext } from 'react'
// import { MyfamilyNameContext } from "../contexts/FamilyNameContext"

export default function ChildOfChildOneComponent(props) {

	// const familyName = useContext(MyfamilyNameContext)

	return (
		<div>
			ChildOfChildOneComponent

			<p>
				{
					JSON.stringify(props)
				}
			</p>
		</div>
	)
}
