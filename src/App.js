import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import ExersizeList from './Component/ExersizeList'
import EditExersize from './Component/EditExersize'
import CreateExersize from './Component/CreateExersize'
import CreateUser from './Component/CreateUser'


const App = ()=> { 
  return(
    <Router>
      <Navbar /> <br/>
      <Route path = '/' component = {ExersizeList}  exact/>
      <Route path = '/edit/:id' component = {EditExersize} />
      <Route path = '/create' component = {CreateExersize} />
      <Route path = '/user' component = {CreateUser} />

    </Router>
  )
} 

export default App;
