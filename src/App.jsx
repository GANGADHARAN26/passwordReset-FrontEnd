import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import LogedPage from './pages/LogedPage';
import PrivateRoute from '../PrivateRoute';
import Forgot from './pages/Forgot';
import UpdatePassword from './pages/UpdatePassword';
import Verify from './pages/Verify';
import SuccessPage from './pages/SuccessPage';
import Info from './pages/Info';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path='/' element={<PrivateRoute element={<LogedPage/>}/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path='/info' element={<Info/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
