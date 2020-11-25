import React from "react";

export function User(props) {

    let getid =  props.getOneUserId;

    let {id, name, email} = props.item

    return (
        <div>
            {id} - {name} - {email}
            <div>
                <button onClick={() => getid(id)}>Get On USER</button>
                <br/>
                ----------------------------------------------------------
            </div>
        </div>

    )

}
