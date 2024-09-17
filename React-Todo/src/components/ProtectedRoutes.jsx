import {onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProtectedRoutes = ({ component }) => {
const [userloggedIn , setuserLoggedIn] = useState(false);
const navigate = useNavigate();

useEffect(() =>{
onAuthStateChanged((user) =>{
    if(user) {
        console.log(user.uid);
        setuserLoggedIn(true);
    }
    else {
        navigate("login")
     }
});
if(!userloggedIn) {
    navigate("login")
}
}, [])

return(
    <>
   { userloggedIn ? component : null}
    </>
     )
}
export default ProtectedRoutes