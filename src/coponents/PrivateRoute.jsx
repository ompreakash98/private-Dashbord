import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'

export default function PrivateRoute() {
    let loggedIn=false;
    if(loggedIn){
        return<Outlet/>
    }else{
        return (<>
        <Navigate to='/login' ></Navigate>
        </>)
    }
 
}
