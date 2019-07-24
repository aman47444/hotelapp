import React from 'react'
import { NavLink } from 'react-router-dom';
export default function SignedIn() {
    return (
        <div>
            <NavLink to="/">SignIn</NavLink>
            <NavLink to="/" className="btn btn-success mx-3" style={{borderRadius:"50%"}}>User</NavLink>
        </div>
    )
}
