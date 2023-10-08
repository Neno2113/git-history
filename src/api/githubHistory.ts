import axios from "axios";


const baseURL = import.meta.env.VITE_BASEURL;



const githubHistoryApi = axios.create({ baseURL });






export default githubHistoryApi;

