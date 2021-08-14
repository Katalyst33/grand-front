import axios from "axios";

const appBaseURL = import.meta.env.VITE_API_URL;


const env = 'development';


console.log(env, 'gggg')


if (env === "development") {
    const envValue = "http://_??_:5300/api";
    const url = envValue.replace("_??_", window.location.hostname);

    axios.defaults.baseURL = url;
} else if (env === "production") {
    axios.defaults.baseURL = appBaseURL as string;
}

// @ts-ignore
// axios.defaults.baseURL = appBaseURL ;
// export default axios;

export {axios as $axios};
