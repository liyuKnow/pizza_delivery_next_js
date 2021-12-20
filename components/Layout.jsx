import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <h1>{children}</h1>
            <Footer />
        </>
    )
}

export default Layout
