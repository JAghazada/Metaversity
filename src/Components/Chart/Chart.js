
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chartc.css"
function ChartC() {
    
  const data = [
    {
      name: '2022',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2024',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2026',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '2028',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    }
  ];
      
        
  return (
        <div className='chart-bg'>
          <LineChart
          width={500}
          height={300}
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fill: 'aqua' }} dataKey="name" />
          <YAxis tick={{ fill: 'aqua' }}  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#ed2939" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#ed2900" />
        </LineChart>
        </div>
  )
}

export default ChartC