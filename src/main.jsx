import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Home/Home.jsx'));
const Projects = lazy(() => import('./components/Projects/Projects.jsx'));
const Blogs = lazy(() => import('./components/Blogs/Blogs.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path='' element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
      </Suspense>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)