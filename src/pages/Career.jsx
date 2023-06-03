import React from 'react'
import IntroBanner from '../components/Career/IntroBanner'
import Openings from '../components/Career/Openings'
import Perks from '../components/Career/Perks'
import Form from "../components/Career/Form"

const Career = () => {
  return (
    <div>
        <IntroBanner/>
        <Openings/>
        <Perks/>
        <Form/>
        {/* <CareerForm/> */}
    </div>
  )
}

export default Career