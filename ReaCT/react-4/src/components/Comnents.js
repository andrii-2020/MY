import React from "react";
import {Button} from "react-bootstrap";

export default class Comments extends React.Component {

    state = {
        comments: []
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => this.setState({comments}))
    }


    render() {
        return (
            <>
                <h3>Comment</h3>
                <div>
                    {
                    this.state.comments.map(value => (<div></div>))
                }
                </div>


            </>
        )
    }
}
