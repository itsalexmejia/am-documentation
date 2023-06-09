import * as React from "react"
import HeaderComponent from "../components/header"

const IndexPage = () => {
  return (
    <div className="min-w-320">
      <HeaderComponent/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
