import './App.css'
import { Summary } from './Pages/Summary'
import { Sales } from './Pages/Sales'
import { Sidenav } from './Components/Sidenav'
import { Header } from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sale } from './Pages/Sale'

export const App = () => {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            {/* rotas da aplicação */}
            <Routes>
              <Route path='/' element={<Summary />} />
              <Route path='/vendas' element={<Sales />} />
              <Route path='/vendas/:id' element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}
