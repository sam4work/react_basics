import {
	createBrowserRouter,
} from "react-router-dom";
// import App from "./App";
import BluePage from "./components/BluePage";
import RedPage from "./components/RedPage";
import ParentComponent from "./components/ParentComponent";


export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <ParentComponent />,
	},
	{
		path: "/blue",
		element: <BluePage />,
	},
	{
		path: "/red",
		element: <RedPage fullName="Mary Doe" />,
	},

]);