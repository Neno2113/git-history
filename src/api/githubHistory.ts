import axios from "axios";


const baseURL = import.meta.env.BASE_URL;


const githubHistoryApi = axios.create({ baseURL });





export default githubHistoryApi;

