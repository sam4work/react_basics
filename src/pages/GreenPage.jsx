import React from 'react'

export default function GreenPage(props) {
  return (
    <>
      <div>GreenPage</div>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
    
  )
}
