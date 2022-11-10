import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Awesome Reasonable Pony</title>
        <meta property="og:title" content="Awesome Reasonable Pony" />
      </Helmet>
    </div>
  )
}

export default Home
