import axios from 'axios';

const axiosI = axios.create({
  baseURL: ''
});
const axiosBasic = axios.create({
  baseURL: 'http://'
});
const axiosWhatsAppContact = axios.create({
  baseURL: 'https://api.whatsapp.com/send?phone=5521984980723&text='
});

export { axiosI, axiosBasic, axiosWhatsAppContact };
