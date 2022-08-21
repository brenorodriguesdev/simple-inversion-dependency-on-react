import { GetUsersService } from '../implements/get-users'
// import { AxiosClient } from '../implements/axios-client'
import App from '../App'
import { FetchClient } from '../implements/fetch-client'



function AppFactory() {
  const fetchClient = new FetchClient()
  // const axiosClient = new AxiosClient()
  const getUsersService = new GetUsersService(fetchClient)
  return <App getUsersUseCase={getUsersService} />
}

export default AppFactory
