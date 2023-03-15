import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Movie from './Component/Movie'

function App() {
return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/:id" element={<Movie/>}/>
</Routes>
</BrowserRouter>
    );
}

export default App;
