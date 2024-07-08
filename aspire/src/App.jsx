import './App.css'
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';


const App = () => {
  return (
      <Router>
        <div className="app">
          <Header />
          <div className="content">
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/login" element = {<Login />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App;