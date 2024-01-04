import { useEffect, useState } from 'react'
import { getUsers } from './api'
import List from './components/List'
import { Form } from './components/Form'
import { Sub } from './types'


function App() {
  const [subs, setSubs] = useState<Sub[]>([])

  useEffect(() => {
    getUsers()
      .then(users => users.json())
      .then(data => {
        setSubs(data)

      })
  }
    , [])

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
