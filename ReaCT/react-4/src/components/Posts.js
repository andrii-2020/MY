import React from "react";
import {Button} from "react-bootstrap";

export default class Posts extends React.Component {

    state = {
        posts: []
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => this.setState({posts}))
    }

    // goToHome = () => {
    //     this.props.history.push({
    //         pathname: '/'
    //     })
    // }

    render() {
        return (
            <>
                <h3>Posts</h3>
                {/*<Button variant="dark" onClick={this.goToHome}>Home</Button>*/}
                <br/>
                <hr/>
                {
                    this.state.posts.map(post => (
                        <div className={'posts'}>
                            <p>{post.title}</p><br/>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    ) )
                }
            </>
        )
    }
}
