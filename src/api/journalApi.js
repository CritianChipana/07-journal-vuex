

import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://curso-vue-restapi-default-rtdb.firebaseio.com'
})

export default journalApi


