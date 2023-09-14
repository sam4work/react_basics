import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(1)

	return (
		<>
			<h1>
				Welcome, using react with git and Odartei
			</h1>

			<button onClick={() => setCount(count + 1)}>Update</button>

			<p>You have clicked {count} number of times!</p>
		</>
	)
}

export default App
