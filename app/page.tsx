import React from 'react'
import { redirect } from 'next/navigation'

const Home = () => {
    redirect("/login")
}

export default Home