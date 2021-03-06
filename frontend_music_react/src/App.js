import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

import Home from "./component/home/Home";
import Artists from "./component/artists/Artists";
import ArtistDetail from "./component/artists/artist_detail/ArtistDetail";
import About from "./component/about/About";
import CreateArtist from "./component/forms/CreateArtist";
import NotFound from "./component/NotFound";

import ModalSoon from "./component/common/ModalSoon";

import './css/styles.css';


function App() {
  
  return (
    <div className="App">
      <ModalSoon/>
      <Header/>
      <div >
        <Router > {/* style={{position: "absolute", top: "10%"}} */}
          <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/artists" element={<Artists/>}/>
            <Route path="/artist_detail/:artistName" element={<ArtistDetail/>}/>
            <Route path="/about" element={<About/>}/>
            {/*<Route path="/createArtist" element={<CreateArtist/>}/>*/}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
