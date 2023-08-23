import Axios from "axios";

const BASE_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;

Axios.defaults.baseURL = BASE_URL;

class HttpService {

    public static baseUrl = Axios.defaults.baseURL;
    public static delete = Axios.delete;
    public static get = Axios.get;
    public static post = Axios.post;
    public static put = Axios.put;
    public static patch = Axios.patch;
}

export default HttpService;
