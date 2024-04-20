import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

import './App.css';

export default function App() {

    return (
        <div className="web-page-container">

            <Router>

                <header>
                    <Header/>
                </header>

                <main className="main-screen">

                    <Main/>

                </main>

                <footer>
                    <Footer/>
                </footer>

            </Router>
        </div>
    );
};