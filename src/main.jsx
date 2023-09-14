import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { AppRouter } from "./app-router.jsx"


const user= {
	name:'kwame',
	age:24,
	food:"friedrice",
	phone:'iphone'

}
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyfamilyNameContext.Provider value={user}>
		<RouterProvider router={AppRouter} />
		</MyfamilyNameContext.Provider>
  </React.StrictMode>,
)
