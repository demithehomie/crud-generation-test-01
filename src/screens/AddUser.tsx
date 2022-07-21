//import  * as C from './styles';
import React, { useState } from "react";
import UsersList from './UsersList';

interface IFormState {
    name: string;
    birthday: number;
    turno: string;
    signUpDate: string;
    email: string;
    password: string;
    stayLoggedIn: boolean;
}

const AddUser = ( ) => {

        const [formState, setFormState] = useState<IFormState>();
  
    //formState.

        return (
    <div className="container mt-5">
        <p className="fs-1 mb-5">Login</p>

            <form>
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email"   
                            className="form-control" 
                            id="email" 
                            name="email"
                            required
                        />

            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            required
                        />
                </div>
                
                

            <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div> 
        )

}

export default AddUser;