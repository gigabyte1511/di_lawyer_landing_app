import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App (): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App
