import React from 'react'
import NavBar from './Nav/NavBar'

const Layout = ({ children }) => {
    return (
        <main>
            <NavBar />

            {children}


        </main>
    )
}

export default Layout