import React from 'react'

export default function BluePage(props) {
  return (
    <>
      <div>BluePage</div>

      <p>
        {
          JSON.stringify(props)
        }
      </p>
    </>
  )
}
