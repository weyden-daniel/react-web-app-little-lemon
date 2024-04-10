import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
//import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div class="web-page-container">

        <Router>

            <header>
                <Header/>
            </header>

            <main class="main-screen">
                <Routes>

                    <Route
                        path="/"
                        element={<Home/>}
                    ></Route>

                    <Route
                        path="/about"
                        element={<About/>}
                    ></Route>

                    <Route
                        path="/menu"
                        element={<Menu/>}
                    ></Route>

                    <Route
                        path="/reservations"
                        element={<Reservations/>}
                    ></Route>

                </Routes>
            </main>

            <footer>
                {/*<Footer/>*/}
            </footer>

        </Router>
    </div>
  );
}

export default App;
