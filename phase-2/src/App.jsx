import React, { useState } from 'react'
import Header from './Components/Header'
import Layout from './Components/Layout'

const App = () => {
  const [theme, setTheme] = useState("light")

  const Inc = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme('dark')
    }
  }
  return (
    <div
      style={{ minHeight: "100vh" }}
      className={`d-flex justify-content-center bg-${theme} text-${theme === "dark" ? "light" : "dark"}`}>

      <div className="container">

        <Header
          theme={theme}
          Inc={Inc}
        />

        <Layout theme={theme}/>

      </div>


    </div>
  )
}

export default App