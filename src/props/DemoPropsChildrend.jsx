import React from 'react'

const DemoPropsChildrend = (props) => {
  return (
    <div>
      <h1>DemoPropsChildrend</h1>
      {/* UI của component con */}
      {props.children}
    </div>
  )
}

export default DemoPropsChildrend
