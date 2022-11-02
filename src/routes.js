import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import NotFound from './NotFound';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);
