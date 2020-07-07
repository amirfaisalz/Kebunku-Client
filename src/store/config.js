import axios from 'axios';

let server = axios.create({
  baseURL: 'http://192.168.43.189:3000'
});

module.exports = server;