import ChildOfChildOneComponent from "./ChildOfChildOneComponent";

export default function ChildOneComponent() {
	return (
		<div>
			<p>ChildOneComponent</p>
			<ChildOfChildOneComponent />
		</div>
	)
}
