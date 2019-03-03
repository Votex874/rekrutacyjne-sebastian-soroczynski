import React from 'react'

const Legend = ({ content }) => {
  console.log(content)
  return (
    <div>
      {content.map(e => <div>{e}</div>)}
    </div>
  )
}

export default Legend
