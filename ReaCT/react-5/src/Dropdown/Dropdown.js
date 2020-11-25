


import React, {useState, useEffect, useMemo, } from 'react';
import {Button, Form} from "react-bootstrap";
import {UsersService} from "../service/UsersService";



function Dropdown() {
    const  [Dopen, setDopen] = useState(false);
    const  [Dpost, setDpost] = useState(false);
    const [posts, setPosts] = useState(null);
    const [post, setPost] = useState(null);
    const [fvalue, setvalue] = useState('');

    const _userService = new UsersService();

    const f = () => {
       _userService.getAllUser().then(value => {
           setPosts(value);
           console.log('f')
       })

    }


    const FetchTodo =() => {
       _userService.getUserid(fvalue).then(value => {
           setPost(value);
           console.log('Fetctodo')

       })

    }
    useEffect(() => {
        FetchTodo(fvalue)
    }, [fvalue]);


    const usememo = useMemo(() =>  f(),[])

    const FormValue = (e) => {
        setvalue(e.target.value);
        // console.log(e.target.value);
    }


    const toggleDropdown = () => {
        setDopen((prvVal) => !prvVal);
    }


    const Dropdown = () => {
        setDpost((show) => !show);
    }

    return (
            <>
                <div className="ml">
            <Button  variant="outline-success"  onClick={toggleDropdown}>Show-ID</Button>
            <br/>

            {Dopen &&(

                <div id="s">
                    <Form onChange={FormValue}>
                        <Form.Control as="select" multiple>
                    {posts.map(post => (
                        <option key={post.id} className={"xxx"} value={post.id}>{post.id} </option>))}
                        </Form.Control>
                    </Form>
                </div>
                )}
                </div>

                <div className="post">
                    {!Dpost &&  (
                        <button id={"show"} type="button"
                                className="btn btn-dark"
                                disabled={!fvalue}
                                onClick={Dropdown}>Show-post
                        </button>
                    )}

                {Dpost && (
                    <div id="m">
                        {
                            post && (<h4>{post.id} <br/><br/> {post.title} <br/> <br/>{post.completed.toString()}</h4>)
                        }
                    </div>
                )}
                </div>


            </>
    )

}
export default Dropdown;
