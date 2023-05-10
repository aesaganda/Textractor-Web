import './styles/App.scss'
import Scanner from './pages/Scanner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Scanner/>
    </>
  )
}

export default App
