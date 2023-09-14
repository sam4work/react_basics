import {
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import MyUserContext from "./contexts/MyUserContext";



export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/dashboard",
		element: <MyUserContext>
			<Dashboard />
		</MyUserContext>,
	},
]);