import { ItemSale } from '../Components/ItemSale'
import { Loading } from '../Components/Loading'
import { useData } from '../Context/DataContext'

export const Sales = () => {
  const { data, loading } = useData()

  if (loading == true) return <Loading />

  if (data === null) return null

  return (
    <ul>
      {data.map(item => <li key={item.id}><ItemSale venda={item} /></li>)}
    </ul>
  )  
}