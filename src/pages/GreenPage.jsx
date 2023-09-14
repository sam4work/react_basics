import React from 'react'

export default function GreenPage(props) {
  return (
    <>
      <div>GreenPage</div>
      <Link to={"/BluePage"}>Go to BluePage</Link>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
    
  )
}
