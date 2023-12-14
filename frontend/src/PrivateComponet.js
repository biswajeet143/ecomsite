import React from 'react'
import { Navigate ,Outlet} from 'react-router';

function PrivateComponet() {
    const auth=localStorage.getItem('user');
  return (
        auth?<Outlet/>:<Navigate to="/signup"/>
  )
}

export default PrivateComponet
