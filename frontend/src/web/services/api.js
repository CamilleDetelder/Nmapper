const { default: config } = require("@/web/config.js")
const { default: axios } = require("axios")

const api = axios.create({
  baseURL: config.api.baseURL,
})

export default api