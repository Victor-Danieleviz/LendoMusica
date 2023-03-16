import { useState } from 'react'

import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

import ErrorSearch from './pages/ErrorSearch'
import Search from './pages/Search'
import History from './pages/History'
import Music from './pages/Music'
import SearchResult from './pages/SearchResult'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/errorSearch' element={<ErrorSearch/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/musicPage' element={<Music/>} />
        <Route path='/searchResult' element={<SearchResult/>} />
      </Routes>
    </Router>
  )
}

export default App
