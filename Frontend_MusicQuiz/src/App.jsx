import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css'

function App() {

  // const [songs, setSongs] = useState([])

  // useEffect(()=>{
  //   const getSongs = async () => {
  //     const response = await axios.get(`https://api.vagalume.com.br/search.php?art=U2&mus=one&apikey={bab2121fe801264d4b507807b2ddf268}/`)
  //     console.log(response)
  //     setSongs(response.data.results)
  //   }
  //     getSongs()
  // }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
