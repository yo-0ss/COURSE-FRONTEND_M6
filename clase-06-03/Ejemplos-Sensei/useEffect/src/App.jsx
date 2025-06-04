import { useEffect, useMemo, useState } from 'react'
import './App.css'

const userData = [
  'Yosselin', 'Jorge', 'Maria', 'Ivan', 'Cesar', 'Jose'
]

function App() {
  const [search, setSearch] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  const filtered = useMemo(()=>{
    console.log('Filtrando... Espere por favor');

    return userData.filter(user=>
      user.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  useEffect(()=>{
    setFilteredUsers(filtered)
  }, [filtered])

  return (
    <>
      <section style={{padding:'20px'}}>
        <h1>Lista de Usuarios</h1>

        <input type="text" placeholder='Buscar...' value={search} onChange={e => setSearch(e.target.value)} />

        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
