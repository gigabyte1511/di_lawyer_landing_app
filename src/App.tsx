import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App (): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <Outlet />
    </div>
  )
}

export default App
