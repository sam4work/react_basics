import React from 'react'
import { Link } from 'react-router-dom'

export default function BluePage(props) {
  return (
    <>
      <div>BluePage</div>
      <Link to={"/green"}><div>Go to GreenPage</div></Link> 

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
  )
}
