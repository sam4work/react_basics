import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { AppRouter } from "./app-router.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
  	</React.StrictMode>
)
