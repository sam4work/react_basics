import {
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import PostList from "./posts/PostList";
import PostView from "./posts/PostView";
import BluePage from "./pages/BluePage";
import GreenPage from "./pages/GreenPage";


export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/posts",
		element: <PostList />,
	},
	{
		path: "/posts/:slug",
		element: <PostView />,
	},
	{
		path: "/blue",
		element: <BluePage fullName = "John Doe" />,
	},
	{
		path: "/green",
		element: <GreenPage fullName = "Mary Doe" />,
	},

]);