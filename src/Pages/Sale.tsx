import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import { IVenda } from "../Context/DataContext"
import { Loading } from "../Components/Loading"

type VendaSemData = Omit<IVenda, 'data'>

export const Sale = () => {
  // pegar o id
  const { id } = useParams()

  const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`)

  if (loading == true) return <Loading />

  if (data === null) return null

  return (
    <div className="box mb">
      <div className='mb'>
        <b>ID: </b>{ data.id }
      </div>
      <div className='mb'>
        <b>Nome: </b>{ data.nome }
      </div>
      <div className='mb'>
        <b>Preço: </b>{ data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
      </div>
      <div className='mb'>
        <b>Status: </b>{ data.status }
      </div>
      <div className='mb'>
        <b>Pagamento: </b>{ data.pagamento }
      </div>
    </div>
  )
}