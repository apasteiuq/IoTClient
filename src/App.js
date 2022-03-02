import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Chart from './components/Chart'
import SetTemp from './components/SetTemp'

const App = () => {
  const [showSetTemp, setShowSetTemp] = useState(false)
  const [temps, setTemps] = useState([])

  useEffect(() => {
    const getTemps = async () => {
      const tempsFromServer = await fetchTemps()
      setTemps(tempsFromServer)
    }

    getTemps()
  }, [])

  const fetchTemps = async () => {
    const res = await fetch('http://localhost:5000/history')
    const data = await res.json()

    console.log(data)
    return data
  }

  const setTemp = async (temp) => {
     const res = await fetch(`http://localhost:5000/temp`, { 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(temp),
     })

     const newTemp = await res.json()
  }
  
  return (
    <Router>
      <div className='container'>
        <Header
          onSet={() => setShowSetTemp(!showSetTemp)}
          showSet={showSetTemp}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showSetTemp && <SetTemp onSetTemp={setTemp} />}
                <Chart data={temps} length={20}/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
