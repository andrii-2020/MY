import React, {Component} from 'react';
import {UserServices} from "../services/UserServices";
import {User} from "./User/User";
import {usersstyle} from "./usersstyle.css"



class Users extends Component {

    _UserServices = new UserServices();
    oneUser = [];
    state = {
        users: [],
        onUser: []
    };


    componentDidMount() {
        this._UserServices.getAllUsers().then(value => {
            this.setState({users: value});
        });

    }

    getUserId = (id) => {
        let filter = this.state.users.filter(value => value.id === id);
        this.oneUser = filter
        this.setState({onUser: filter[0]});
    }

    render() {

        return (
            <div>
                {
                    this.state.users.map(value => (<User
                        item={value}
                        key={value.id}
                        getOneUserId={this.getUserId}
                    />))
                }
               <hr/>
                <p>ONUSER</p>
                <div className="oneUser">{this.oneUser.map((value) => (<div> {value.id} - {value.name} - {value.email}</div>))}
                </div><hr/>

            </div>
        );
    }
}

export default Users;
