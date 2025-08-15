import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'

const MyApp = () => {
  return (
    <div className="wrap">
      {/* 選單 */}
      <Nav/>
      <Routes>
        {/* 首頁 */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/news' element={<News/>} ></Route>
      </Routes>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default MyApp