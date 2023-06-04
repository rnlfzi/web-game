import React from 'react'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout