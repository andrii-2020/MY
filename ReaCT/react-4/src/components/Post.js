import React from 'react';
import {Card} from "react-bootstrap";

export default class Post extends React.Component {

    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
            .then(value => value.json())
            .then(post => this.setState({post}))
    }


    render() {
        return (
            <>
                <h3>Post</h3>
            <div>

                {this.state.post && <Card border="success" style={{ width: '18rem', margin: '1rem', borderRadius: '0.5rem' }}>
                    <Card.Header>User-Post {this.state.post.id}</Card.Header>
                    <Card.Body>
                    <Card.Title>{this.state.post.title}</Card.Title>
                        <hr/>
                    <Card.Text>
                        {this.state.post.body}
                    </Card.Text>
                    </Card.Body>
                    </Card> }
            </div>
                </>
        );
    }
}

