import logo from './logo.svg';
import './App.css';
import AddBooks from './Components/AddBooks';
import SelectBooks from './Components/SelectBooks';
import DeleteBooks from './Components/DeleteBooks';
import ViewallBooks from './Components/ViewallBooks';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBooks/>}/>
      <Route path='/search' element={<SelectBooks/>}/>
      <Route path='/delete' element={<DeleteBooks/>}/>
      <Route path='/view' element={<ViewallBooks/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
