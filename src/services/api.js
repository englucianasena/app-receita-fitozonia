import axios from 'axios';

/*
// Rodar API com IPV4: json-server --watch -d 180 --host (colocar IPV4 aqui) db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.2.50:3000/'
})

export default api;