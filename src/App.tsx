import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GetUsersUseCase, User } from './contracts/get-users'

interface AppProps {
  getUsersUseCase: GetUsersUseCase
}

function App({ getUsersUseCase }: AppProps) {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUsers() {
      const users = await getUsersUseCase.get()
      setUsers(users)
    }

    getUsers()
  })

  return (
    <div className="App">
      {JSON.stringify(users)}
    </div>
  )
}

export default App
