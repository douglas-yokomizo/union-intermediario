import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import User from "./pages/User"


function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={User} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
