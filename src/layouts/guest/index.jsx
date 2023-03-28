import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components'

import './style.scss'

export const GuestLayout = () => {
  return (
    <main className="guest-layout">
      <Header variant="minimal" />
      <Outlet />
      <div className="container">
        <Footer />
      </div>
    </main>
  )
}
