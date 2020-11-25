
export class UsersService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllUser() {
        return fetch(`${this._url}/todos`).then(value => value.json());
    }

    getUserid(id) {
        return fetch(`${this._url}/todos/${id}`).then(value => value.json())
    }

}
