import React from 'react'

interface Iprops {
  children: any
}
function Layout(props: Iprops) {
  return (
    <div className="layout">{props.children}</div>
  )
}

export default Layout