import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={routes} />)
