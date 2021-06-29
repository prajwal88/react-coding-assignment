import AppConfig   from '../config/config';
import axios from 'axios';

const GetAllCardData = () => {
    return axios.get(AppConfig.path);
}

export default GetAllCardData;
