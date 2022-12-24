
import './App.css';
import PageOne from './components/Page1';
import { useNavigate,Routes, Route } from 'react-router-dom';
import PageTwo from './components/Page2';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
    

      <Routes>
        <Route path='/' element={<PageOne/>} />
        <Route path='/page2' element={<PageTwo/>} />
      </Routes>
     
    </div>
  );
}

export default App;
