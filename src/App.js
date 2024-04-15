import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Main from './pages/Main';

//import Footer from './components/Footer';

import './App.css';

export default function App() {

    return (
        <div class="web-page-container">

            <Router>

                <header>
                    <Header/>
                </header>

                <main class="main-screen">

                    <Main/>

                </main>

                <footer>
                    {/*<Footer/>*/}
                </footer>

            </Router>
        </div>
    );
};