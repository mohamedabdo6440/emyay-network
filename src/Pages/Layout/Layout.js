import React from 'react'
import NavBar from './Nav/NavBar'

const Layout = ({ children }) => {


    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout