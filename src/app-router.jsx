import {
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import PostList from "./posts/PostList";
import PostView from "./posts/PostView";


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

]);