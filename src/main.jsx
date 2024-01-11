import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router/Routes'
import "./output.css"



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={routes} />)
