import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router"
import SearchPage from './Pages/SearchPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home page</h1>}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App