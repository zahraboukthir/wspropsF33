import React from 'react'

const Footer = ({children,text}) => {
  return (
    <div>
       <h1>txt: {text}</h1>
        CopyRight F3
        {children}
    </div>
  )
}
Footer.defaultProps={
    text:"str"
}
export default Footer