import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

interface VendaDia {
  data: string
  pago: number
  processando: number
  falha: number
}

const transformData = (data: IVenda[]): VendaDia[] => {
  // Agrupar vendas com mesmo dia
  const dias = data.reduce((acc: {[key: string]: VendaDia}, item) => {
    const dia = item.data.split(' ')[0]
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0
      }
    }
    acc[dia][item.status] += item.preco
    return acc
  }, {})
  return Object.values(dias).map((dia) => ({ ...dia, data: dia.data.substring(5) }))
}

export const Graphics = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart width={400} height={400} data={transformedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="data" />
        <YAxis dataKey="pago" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#ff7300"/>
        <Line type="monotone" dataKey="processando" stroke="#387908"/>
        <Line type="monotone" dataKey="falha" stroke="#000"/>
      </LineChart>
    </ResponsiveContainer>
  )
}