
import React  from 'react';

import { useForm } from "react-hook-form";
import {Alert} from "react-bootstrap";

const Form = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values)
    };

    return (

        <form  onSubmit={handleSubmit(onSubmit)}>
            <input
                className="form-control"
                name="email"
                placeholder="email"
                ref={register({
                    required: "Required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />

            {
                !!errors.email && (
                    <Alert variant="danger">
                        {errors.email && errors.email.message}
                    </Alert>
                )
            }

                <br/>
                <br/>

                <input
                    name="password"
                    className="form-control"
                    type="password"
                    ref={register({
                    })}
                    placeholder="Password"/>

                <br/>
                <br/>


            <input
                className="form-control"
                name="username"
                placeholder="username"
                ref={register({
                })}
            />
            <div>
                {errors.username && errors.username.message}
            </div>
            <br/>
            <button  className="btn btn-success" disabled={!!errors.email } type="submit">Submit</button>
        </form>

    );
};

export default Form;
