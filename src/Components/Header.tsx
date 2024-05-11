import React, { useEffect, useState } from 'react'
import { useData } from '../Context/DataContext'
import { DateRange } from './DateRange'
import { Month } from './Month'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const [title, setTitle] = useState('resumo')

  // local ativo
  const location = useLocation()

  useEffect(() => {
    let page = ''
    if (location.pathname === '/') {
      page = 'Resumo'
    } else {
      page = 'Vendas'
    }
    setTitle(page)
    document.title = page
  }, [ location ])

  return (
    <div className='mb'>
      <div className='daterange mb'>
        <DateRange />
        <h1 className='box bg3'>{ title }</h1>
      </div>
      <Month />
    </div>
  )
}