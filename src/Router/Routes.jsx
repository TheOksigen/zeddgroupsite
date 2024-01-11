import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from '../Layout/Layout'

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			
		</Route>
	)
)