import Control from "./components/Control"
import Header from "./components/Header"
import List from "./components/List"
import { useQuery } from "react-query"

function App() {
  const { data } = useQuery()

  return (
    <>
      <Header />
      <List />
      <Control />
    </>
  )
}

export default App
