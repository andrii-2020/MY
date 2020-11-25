import React, {Component} from 'react';
class User extends Component {



    constructor(props) {
        super(props);
        let user = this.props;
        this.state = {user};

    }

    status = () => {
        let {user} = this.state;
        user.xxx.status = !user.xxx.status;
        user.xxx.age = ++user.xxx.age
        user.xxx.name = user.xxx.name.toUpperCase()
        this.setState({user});
    };

    render() {
        const Style = {
            color: 'blue',
        }
        return (
            <div id={this.state.user.xxx.name} style={Style} >
                {this.state.user.xxx.name} -
                {this.state.user.xxx.age} -
                {this.state.user.xxx.status.toString()}
                <button onClick={this.status}>STATUS</button>
                {/*<button onClick={ ()=> this.status(user)}>STATUS</button>*/}
                {/*<button onClick={this.status.bind(this, user)}>STATUS</button>*/}
            </div>


        );
    }
}

export default User;
