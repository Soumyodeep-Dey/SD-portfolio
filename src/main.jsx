import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Support from './components/Support/Support.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='support' element={<Support />} />
      {/* Add other routes as needed */}

      {/* Catch-all route for 404 Not Found */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)