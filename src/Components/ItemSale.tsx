import { CSSProperties } from 'react'
import { IVenda } from '../Context/DataContext'
import { NavLink } from 'react-router-dom'

const styles: CSSProperties = {
  fontFamily: 'monospace',
}

export const ItemSale = ({ venda }: { venda: IVenda }) => {

  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${venda.id}`} style={styles}>{ venda.id }</NavLink>
      <div>{ venda.nome }</div>
      <div>{ venda.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</div>
    </div>
  )
}