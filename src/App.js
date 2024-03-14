
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PopularPage from './Pages/PopularPage';
import Homepage from './Pages/Homepage';
import AllMoviesPage from './Pages/AllMoviesPage';
import TopRatedPage from './Pages/TopRatedPage';
import SearchPage from './Pages/SearchPage';
import Navbar from './Component/Navbar';

function App() {
  // const apiKey = '6b0fe5f81a64a687c49ed409d6762848'
  // const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4'
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}>  </Route>
          <Route path="/movies/:id" element={<moviedetails/>} />
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/top-rated" element={<TopRatedPage />}></Route>
      
      </Routes>
    </BrowserRouter>
    </>
 
  );
}

export default App;
