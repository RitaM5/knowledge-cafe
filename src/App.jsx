import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog';
function App() {
  return (
    <div className="container">
      <Header/>
      <Home/>
      <Blog/>
      <ToastContainer />
    </div>
  )
}

export default App
