import React from 'react'

const Legend = ({ content }) => {
  return (
    {
      content.map((e, i) => {
        return (
          <div>{e}</div>
        )
      })
    }
  )
}

export default Legend
