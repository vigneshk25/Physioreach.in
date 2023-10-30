import Home from '../pages/Home';
import Services from '../pages/Services'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import AreaDoc from '../components/AreaDoctor/AreaDoc';


import {Routes , Route} from 'react-router-dom'

const Routers = () => {
  return ( <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    {/* <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Singup/>}/> */}
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/AreaDoc' element={<AreaDoc/>} />


  </Routes>

  )
}

export default Routers