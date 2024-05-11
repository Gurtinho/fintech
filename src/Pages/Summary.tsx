import { Graphics } from '../Components/Graphics'
import { Loading } from '../Components/Loading'
import { useData } from '../Context/DataContext'

export const Summary = () => {

  const { data, loading } = useData()

  if (loading == true) return <Loading />

  if (data == null) return null

  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2>Vendas</h2>
          <span>{data
          .filter((item) => item.status !== 'falha')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className='box'>
          <h2>Recebidos</h2>
          <span>{data
          .filter((item) => item.status === 'pago')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className='box'>
          <h2>Processando</h2>
          <span>{data
          .filter((item) => item.status === 'processando')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
      </div>
      <div className='box mb'>
        <Graphics data={data} />
      </div>
    </section>
  )
}