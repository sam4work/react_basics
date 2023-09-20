import {
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />
	},
	{
		path: "/login",
		element: <Login />
	},

]);