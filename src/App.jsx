import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(1)

	return (
		<>
			<h1>
				
				Welcome, using react with git
			</h1>
				<button onClick={() => setCount( count + 1)}>Update</button>
				<p>You have clicked {count} number of times!</p>
		</>
	)
}

export default App
