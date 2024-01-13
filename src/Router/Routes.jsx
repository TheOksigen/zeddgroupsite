import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from '../Layout/Layout'
import Home from "../Components/Home";

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
		</Route>
	)
)