import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComment from './routes/AddComment';
import AddPost from './routes/AddPost';
//import './App.css';
import Home from './routes/Home';
import UpdatePost from './routes/UpdatePost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addPost' element={<AddPost></AddPost>}></Route>
        <Route path='/updatePost' element={<UpdatePost></UpdatePost>}></Route>
        <Route path='/addComment' element={<AddComment></AddComment>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
