import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))
const SignupForm = lazy(() => import('./components/form/SignupForm'))
const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const NotFound = lazy(() => import('./Pages/NotFound'))

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
