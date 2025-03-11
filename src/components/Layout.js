import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
      <Header />
      <main className='mx-auto font-[Gilroy] mt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
