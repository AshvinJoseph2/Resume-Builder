import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import UserForm from "./pages/UserForm"
import History from "./pages/History"
import Pgnf from "./pages/Pgnf"
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from "./pages/ViewResume"


function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='resume' element={<Resume/>}/>
      <Route path='form' element={<UserForm/>}/>
      <Route path='/resume/:id/view' element={<ViewResume/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='/*' element={<Pgnf/>}/>
     </Routes>
    <Footer/>
    </>
  )
}

export default App
