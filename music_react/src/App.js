import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import './sass/styles.sass';
import './css/styles.css';

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./component/home/Home";
import Artists from "./component/artists/Artists";
import ArtistDetail from "./component/artist_detail/ArtistDetail";
import About from "./component/about/About";
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
         {/* <Route path="/" element={Home}/>
          <Route path="/artists" element={Artists}/>
          <Route path="/artist_detail" element={Artist_detail}/>
          <Route path="/about" element={About}/>*/}

          <Route path="/" element={<Home/>}/>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/artist_detail" element={<ArtistDetail/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
