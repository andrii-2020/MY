export class UserServices {
    _url='https://jsonplaceholder.typicode.com';

    getAllUsers() {
        return  fetch(`${this._url}/users`).then(value => value.json());
    }

    getUserId(id) {
        return fetch(`${this._url}/users/${id}`).then(value => value.json())
    }
}
