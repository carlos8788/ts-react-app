import { useEffect, useState } from 'react'
import { getUsers } from './api'
import List from './components/List'
import { Form } from './components/Form'
import { Sub, SubsResponseFromApi } from './types'


function App() {
  const [subs, setSubs] = useState<Sub[]>([])

  useEffect(() => {
    getUsers()
      .then(data => {
        const subsFromApi = mapFromApiToSubs(data)
        setSubs(subsFromApi)
      })

    // Esto es equivalente a lo que hicimos arriba
    // getUsers()
    //   .then(mapFromApiToSubs)
    //   .then(setSubs)
  }
    , [])

  const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Sub[] => {
    return apiResponse.map(subFromApi => {
      const {
        subMonths,
        urlImage: avatar,
        nick,
        description
      } = subFromApi

      return {
        nick,
        description,
        avatar,
        subMonths
      }
    })
  }
  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <main className='container'>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </main>

  )
}

export default App
