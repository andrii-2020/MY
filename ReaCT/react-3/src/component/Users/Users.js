import React, {Component} from 'react';
import {UserServices} from "../Services/UserServices";
import {users} from  "./users.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "../filter/Filter";



class Users extends Component {
    _UserServices = new UserServices();

    state = {
        users: [],
        user: [],
        search: ''
    };

    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this._UserServices.getAllUsers().then(value => {
            this.setState({users: value});
        });
        this.xxx = React.createRef();

    }

    render() {
        let filUsers = this.state.users.filter(value => {
            return value.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        return (
            <div>
                <form>
                <select ref={this.xxx}>
                    {this.state.users.map(value => (<option key={value.id} value={value.id}>{value.id} {value.name}</option>))}
                </select>
                    <button type="button" class="btn btn-info" onClick={this.send}>SEND</button>
                </form>
                <div>
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th>id</th>
                            <th> Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.state.user.name}</td>
                            <td>{this.state.user.username}</td>
                            <td>{this.state.user.email}</td>
                            <td>{this.state.user.phone}</td>
                            <td>{this.state.user.website}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
                <h3>SEARCH NAME USER</h3>
                <input type="text" onChange={this.formChange.bind(this)} class="form-control"
                       value={this.state.search} placeholder="Search"></input>
                <div className="search">
                        {filUsers.map((value) => {
                            return <Filter item={value} key={value.id}/>
                        })}
                </div>
            </div>
        );
    }
    send = () => {
        this._UserServices.getUserId(this.xxx.current.value).then(value => this.setState({user: value}))

    }
    formChange = (e) => {
        this.setState({search: e.target.value})
    }
}

export default Users;
