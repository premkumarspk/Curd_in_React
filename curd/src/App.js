import './App.css';
import Create from './Assets/Create'
import Home from './Assets/Home'
import Read from './Assets/Read'
import Update from './Assets/Update'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='single/:id' element={<Read/>}> </Route>
        <Route path='/update/:id' element={<Update/>}> </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
