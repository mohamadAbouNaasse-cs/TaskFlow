import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Tasks from './Tasks';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <header className="app-header">
                    <nav className="nav-container">
                        <div className="logo-container">
                            <img
                                src="/src/assets/react.svg"
                                alt="Task Manager Logo"
                                className="logo-img"
                            />
                            <span className="logo-text">
                                Task Manager
                            </span>
                        </div>

                        <ul className="nav-menu">
                            <li className='nav-item'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/contact">Contact</Link>
                            </li> 
                            <li className='nav-item'>
                                <Link to="/tasks">Tasks</Link>
                            </li>                 
                        </ul>
                    </nav>
                </header>
                
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/tasks" element={<Tasks />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;