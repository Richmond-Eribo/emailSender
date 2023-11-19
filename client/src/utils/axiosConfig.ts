import axios from 'axios'

const Axios = axios.create({
  baseURL: import.meta.env.AXIOS_BASE_URL,
})

export default Axios
