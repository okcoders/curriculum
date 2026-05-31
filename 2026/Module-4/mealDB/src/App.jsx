import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  const bodyText = "This is the body"

  return (
    <>
      <Header title="Home" />
      <Body data={bodyText}/>
      <Footer />
    </>
  )
}

export default App
