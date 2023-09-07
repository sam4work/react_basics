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
				<button onClick={setCount( count + 1)}></button>
			</h1>
		</>
	)
}

export default App
