import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './pages/Users'
import Warehouses from './pages/Warehouses'
import Products from './pages/Products'

function App() {

  return (
    <Router>
      <Routes>

        {/* <Route path='/' element={<Products/>}/> */}
        
        <Route path='/products' element={<Products/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/warehouses' element={<Warehouses/>}/>

        {/* <Route path='*' element={<Not/>}/> */}

      </Routes>
    </Router>
  )
}

export default App
