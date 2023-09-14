import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./app-router.jsx"
import { MyfamilyNameContext } from "./contexts/FamilyNameContext"

const user = {
	firstName: "John",
	lastName: "Doe",
	email: "johndoe@gmail.com",
	password: "1234",
	address: "spintex",
	gender: "M"
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyfamilyNameContext.Provider value={user}>
			<RouterProvider router={AppRouter} />
		</MyfamilyNameContext.Provider>
	</React.StrictMode>,
)
