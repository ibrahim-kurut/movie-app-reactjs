import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import MoviesList from './components/MoviesList/MoviesList';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsMovie from './components/DetailsMovie/DetailsMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // ======================== get all movies ========================
  const getAllMovies = async () => {
    const urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=1';
    const res = await axios.get(urlAPI)
    // console.log(res.data.results)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  useEffect(() => {
    getAllMovies();

  }, [])

  // ======================== search from any word in api ========================

  const search = async (word) => {

    if (word === '') {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`)
      setMovies(res.data.results)

      setPageCount(res.data.total_pages)
    }
  }
  // ======================== get current page ========================
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />
            <Route path='/movie/:id' element={<DetailsMovie />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;


// https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=v&&language=en



{/* <MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />
        <DetailsMovie /> */}