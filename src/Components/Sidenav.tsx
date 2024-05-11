import { NavLink } from 'react-router-dom'
import FintechSVG from '../assets/FintechSVG'
import fintech from '../assets/fintech.svg'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'

export const Sidenav = () => {
  return (
    <nav className='sidenav box bg3'>
      <FintechSVG title='fintech logo' />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to='/vendas'>Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}