import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'

interface IDataContext {
  data: IVenda[] | null
  loading: boolean
  error: string | null
  inicio: string
  final: string
  setInicio: Dispatch<SetStateAction<string>>
  setFinal: Dispatch<SetStateAction<string>>
}

export interface IVenda {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'pix' | 'cartao'
  parcelas: number | null
  data: string
}

const getDate = (n: number) => {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yy = date.getFullYear()
  return `${yy}-${mm}-${dd}`
}

const DataContext = createContext<IDataContext | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error('UseData precisa estar em DataContextProvider')
  return context
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [ inicio, setInicio ] = useState(getDate(30))
  const [ final, setFinal ] = useState(getDate(0))

  const { data, loading, error } = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      { children }
    </DataContext.Provider>
  )
}