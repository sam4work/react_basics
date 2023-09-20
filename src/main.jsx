import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./app-router.jsx"
import MyUserContext from "./contexts/MyUserContext"



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyUserContext>
			<RouterProvider router={AppRouter} />
		</MyUserContext>
	</React.StrictMode >,
)
