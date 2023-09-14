import React from 'react'
import { Link } from 'react-router-dom'

export default function GreenPage(props) {
  return (
    <>
      <div>GreenPage</div>
      <Link to={"/blue"}>Go to BluePage</Link>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
    
  )
}
