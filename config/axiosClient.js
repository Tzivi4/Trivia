import axios from 'axios'

const axiosClient = axios.create({
  baseURL: "https://beta-trivia.bongo.best",
})

export default axiosClient
