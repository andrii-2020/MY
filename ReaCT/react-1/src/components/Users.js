import React, {Component} from 'react';
import {users} from "../data/data";
import User from "./User";



class Users extends Component {
    render() {
        return (
            <div>
                {
                    users.map((items, index) => {
                        return (<User xxx={items} key={index}/>)
                        })
                }
            </div>
        );
    }
}

export default Users;
