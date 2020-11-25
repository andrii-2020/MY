import React from 'react';
import {Card} from "react-bootstrap";

export default class Comment extends React.Component {

    state = {
        comment: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)

        fetch(`https://jsonplaceholder.typicode.com/comments/${id}` )
            .then(value => value.json())
            .then(comment => {
                this.setState({comment} )
            })

    }

    render() {
        console.log(this.state.comment)
        return (

            <>
                <h3>Comment</h3>
                <div>
                    {this.state.comment && <Card border="success" style={{ width: '18rem', margin: '1rem', borderRadius: '1rem' }}>
                        <Card.Header>User-Comment {this.state.comment.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>name: {this.state.comment.name} <hr/> email: {this.state.comment.email}</Card.Title>
                            <hr/>
                            <Card.Text>
                                {this.state.comment.body}
                            </Card.Text>
                        </Card.Body>
                    </Card> }
                </div>
            </>
        );
    }
}

