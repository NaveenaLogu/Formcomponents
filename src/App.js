import logo from './logo.svg';
import './App.css';
import CreateUser from './CRUD MongoDB/Create User/CreateUser';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ViewUser from './CRUD MongoDB/View User/ViewUser';
import EditUser from './CRUD MongoDB/Edit User/EditUser';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<CreateUser></CreateUser>}></Route>
      <Route path='/view' element={<ViewUser></ViewUser>}></Route>
      <Route path='/edit/:id' element={<EditUser></EditUser>}></Route>
     </Routes>
     </BrowserRouter>
     
   
  );
}

export default App;
