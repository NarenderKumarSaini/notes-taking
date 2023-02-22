import axios from 'axios';

import getEnvVars from '../../environment';

//const { apiUrl } = getEnvVars();
const instance = axios.create({
    baseURL: "https://note-nestjs.onrender.com"
});

export default instance;