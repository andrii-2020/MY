import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Filter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let style = {
            backgroundColor: "DodgerBlue",

    }
        return (
            <div style={style}>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{this.props.item.id}</th>
                        <td >{this.props.item.name}</td>
                        <td>{this.props.item.username}</td>
                        <td>{this.props.item.email}</td>
                        <td>{this.props.item.phone}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Filter;
