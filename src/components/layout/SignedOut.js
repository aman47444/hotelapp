import React from 'react'
import {NavLink} from 'react-router-dom';
export default function SignedOut() {
    return (
        <div>
            <NavLink to="/" className="mx-3">Logout</NavLink>
        </div>
    )
}
