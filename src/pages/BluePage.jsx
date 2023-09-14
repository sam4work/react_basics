import React from 'react'
import { Link } from 'react-router-dom'

export default function BluePage(props) {
  return (
    <>
      <div>BluePage</div>
      <Link to={"/green"}>Go to GreenPage</Link>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
  )
}
