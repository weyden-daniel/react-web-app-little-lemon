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
        <Header/>
        <main>
            <Home/>
            <About/>
            <Menu/>
            <Reservations/>
        </main>
        {
        /*
            <Footer/>
        */
        }
    </div>
  );
}

export default App;
