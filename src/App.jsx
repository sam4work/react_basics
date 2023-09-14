import { useCallback, useState } from 'react'
import './App.css'

function App() {

	const [fullName, setfullName] = useState("")

	// useCallback take a callback and dependancy array as parameters
	const getFirstName = useCallback(function () {
		return fullName.split(" ")[0]
	}, [fullName])

	return (
		<>

			{/* React CallBack Hook */}
			<input
				type="text"
				onChange={(e) => setfullName(e.target.value)}
			/>

			<p>
				{getFirstName()}
			</p>

		</>
	)
}

export default App
