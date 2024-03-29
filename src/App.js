import HomePage from './pages/homepage.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/navbar.js';
import {Routes , Route} from "react-router-dom";
import AboutPage from './pages/aboutpage.js';
import MenuPage from './pages/menupage.js';
import GalleryPage from './pages/gallerypage.js';
import Footer from './components/footer.js';
import BookPage from './pages/bookpage.js';

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Routes >
        <Route
        path="/"
        element={<HomePage />}
        />
        <Route
        path='/about'
        element={<AboutPage />}/>
        <Route
        path='/menu'
        element={<MenuPage />}
        />
        <Route
        path='/gallery'
        element={<GalleryPage />}
        />
      <Route
      path='/book-a-table'
      element={<BookPage />}
      />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
