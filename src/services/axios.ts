import axios from 'axios';

const axiosI = axios.create({
  baseURL: ''
});
const axiosBasic = axios.create({
  baseURL: 'http://'
});
const axiosWhatsAppContact = axios.create({
  baseURL: ''
});

export { axiosI, axiosBasic, axiosWhatsAppContact };
