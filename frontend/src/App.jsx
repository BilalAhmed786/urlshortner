import UrlShortener from './urlshortner'
import Urlredirect from './urlredirect'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UrlShortener />}/>
      <Route path='/:shortcode' element={<Urlredirect/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
