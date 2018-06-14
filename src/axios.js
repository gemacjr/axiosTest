import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


//Also use interceptors here

// axios.interceptors.request.use(request => {
//     console.log(request);

//     //Authorization header?? add cookie
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default instance;