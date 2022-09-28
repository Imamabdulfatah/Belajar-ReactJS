// import axios from 'axios';

// const RootPath = 'http://localhost:3004'
// const OnlineRoot = 'https://jsonplaceholder.typicode.com'

// /// function global untuk Get Data
// /// digunakan agar tidak menerima post saja bisa user dll
// const Get = (path, root) =>  {
//     const promise = new Promise((resolve, reject) => {
//         axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
//         .then((result) => {
//             resolve(result.data);
//         }, (err) => {
//             reject(err);
//         })
//     })
//     return promise;
// }

// const Post = (path, root, data) => {
//     const promise = new Promise((resolve, reject) => {
//         axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then((result) => {
//            resolve(result)
//         }, (err) => {
//             reject(err);
//         });
//     })
//     return promise;
// }

import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';



//Post
const postNewsBlog = (data) => Post('posts', false, data);

//Put
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API ={
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments

}

export default API;