import Nav from "./components/Nav.jsx"
import Main from "./components/Main.jsx"
import { useState } from "react"
const App = () => {

  const [cartQuantity, setCartQuantity] = useState(0)

  return (
    <>
      <Nav 
        CartQuantity = {cartQuantity}
        SetCartQuantity = {setCartQuantity}
      />
      <Main 
        SetCartQuantity = {setCartQuantity}
      />
    </>
  )
}

export default App