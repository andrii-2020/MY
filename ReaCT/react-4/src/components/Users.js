import React from 'react';
import {Button, Table} from "react-bootstrap";

export default class Users extends React.Component {
    state = {
        users: []
    }

    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => this.setState({users}))
    }


    render() {
        return (
            <div>
                <br/>
                <Button variant="dark" onClick={this.goToHome}>Home</Button>
                {
                    this.state.users.map((user) => (
                        <div>
                            <Table striped  bordered hover variant="dark"  style={{marginTop: '1rem'}}>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className={'but'}>
                            <Button variant="info"
                                    onClick={() => this.props.history.push(`/users/${user.id}`)}>ShowUser
                            </Button>

                            <Button variant="outline-dark" style={{marginLeft: '1rem'}}
                                    onClick={() => this.props.history.push(`/posts/${user.id}`)}>ShowUSER-Post
                            </Button>

                            <Button variant="outline-info" style={{marginLeft: '1rem'}}
                                    onClick={() => this.props.history.push(`/comments/${user.id}`)}>ShowUSER-Comment
                            </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}


