import React from 'react'
import { Link } from 'react-router-dom'

export default function BluePage(props) {
  return (
    <>
      <div>BluePage</div>
      <Link to={"/GreenPage"}>Go to GreenPage</Link>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
  )
}
