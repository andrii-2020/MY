import React from 'react';
import {Card} from "react-bootstrap";

export default class User extends React.Component {
    state = {
        user: null
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
            .then(value => value.json())
            .then(user => this.setState({user}))
    }

    render() {
        return (
            <div>
                <h2>User</h2>
                <div>
                    {
                        this.state.user && <Card border="secondary"
                                                 style={{
                                                     width: '18rem',
                                                     marginLeft: '10rem',
                                                     textAlign: 'center',
                                                     borderRadius: '0.5rem'
                                                 }}>
                            <Card.Header>USER ID: {this.state.user.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>{this.state.user.name} - {this.state.user.username}</Card.Title>
                                <Card.Text>
                                    {this.state.user.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }

                {/*{*/}
                {/*    this.state.user && <p>*/}
                {/*        {this.state.user.id} <br/>*/}
                {/*        {this.state.user.name} <br/>*/}
                {/*        {this.state.user.username} <br/>*/}
                {/*        {this.state.user.email}*/}
                {/*    </p>*/}
                {/*}*/}
                </div>
            </div>
        );
    }
}


