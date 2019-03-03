import React from 'react'

const Legend = ({ content }) => {
  return (
    <div>
      {content.map((e, i) => <div key={i}>{e}</div>)}
    </div>
  )
}

export default Legend
