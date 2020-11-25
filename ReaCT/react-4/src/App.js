
import {NavLink, Route, Switch} from "react-router-dom";
import Users from "./components/Users";





import React from "react";
import './App.css';
import User from "./components/User";
import Posts from "./components/Posts";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Error} from "./components/Error";
import Post from "./components/Post";
import Comments from "./components/Comnents";
import Comment from "./components/Comment";






class App extends React.Component {

    state = {
        lStatus: false
    }

    logStatus = () => {
        this.setState({lStatus: !this.state.lStatus})
    }



    render() {
        const mstyle = {
            marginLeft: '1rem'
    }
        return (
            <>

                <Navbar bg="dark" variant="dark" >
                    <Nav  className="mr-auto">
                        <NavLink  exact to="/" activeClassName={'mActive'}>Home</NavLink>
                        <NavLink style={mstyle} to="/users">Users</NavLink>

                        {/*<Button style={mstyle} variant="light" onClick={this.logStatus}>{this.state.lStatus ? 'Logout' : 'Login'}</Button>*/}
                    </Nav>
                </Navbar>

                <div>
                    <Switch>
                        {/*{*/}
                        {/*     this.state.lStatus && (*/}
                        {/*    <>*/}
                        {/*        <Route  path="/users/:id" component={User}/>*/}
                        {/*        <Route exact path="/users" component={Users}/>*/}
                        {/*    </>*/}
                        {/*     )*/}
                        {/*}*/}

                        <Route  path="/users/:id" component={User}/>
                        <Route exact path="/users" component={Users}/>
                        <Route path="/posts/:id" component={Post}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/comments/:id" component={Comment}/>
                        <Route path="/comments" component={Comments}/>
                        <Route exact path="/" render={ () => <h1>Welcome Home</h1>}/>
                        <Route render={() => <Error/>} />
                    </Switch>
                </div>
            </>
        );
    }


}

export default App;
