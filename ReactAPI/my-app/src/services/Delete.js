import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

/// function global untuk Get Data
/// digunakan agar tidak menerima post saja bisa user dll
const Delete = (path, root) =>  {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Delete;

