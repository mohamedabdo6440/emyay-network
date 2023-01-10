import React from 'react'
import NavBar from './Nav/NavBar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    )
}

export default Layout