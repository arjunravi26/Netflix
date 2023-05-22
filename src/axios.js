 import axios from 'axios';
 import {base_url} from './const/const'
 const instance =axios.create({
    baseURL:base_url
 })
 export default instance;

