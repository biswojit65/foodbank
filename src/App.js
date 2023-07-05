
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import { Switch } from '@mui/material'
import {ContextAPIProvider} from './Components/ContextReducer.js'
import MyOrder from './Components/Pages/MyOrder'
function App() {
  return (
      //<ContextAPIProvider>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>  
          <Route path='/signup' element={<Signup/>}/>  
          <Route path='/myorder' element={<MyOrder/>}/>          
          </Routes>
       </BrowserRouter>
       //</ContextAPIProvider>
    //     <Router>
    //       <div>
    //     <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/login' element={<Login/>}/>  
    //     <Route path='/signup' element={<Signup/>}/>
        
    //     </Routes>
    //     </div>
    //  </Router>
    

  );
}

export default App;