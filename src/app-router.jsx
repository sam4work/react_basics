import {
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import PostList from "./posts/PostList";
import PostView from "./posts/PostView";
import BluePage from "./BluePage";
import RedPage from "./RedPage";



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

		element: <BluePage fullname='kwame Adams'/>,
	},
	{
		path: "/red",
		element: <RedPage fullname='mary jane'/>,
	},




]);