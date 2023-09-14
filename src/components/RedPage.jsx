
export default function RedPage(props) {
	return (
		<div>
			<p>BluePage</p>
			<p>
				{
					JSON.stringify(props)
				}
			</p>
		</div>
	)
}
