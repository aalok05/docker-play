import React,{useContext, useEffect,useState} from 'react'

import {ChanelContext,UserContext} from '../../App'


function UseContext() {

    let [userData,setUserData] = useState({})

    let user = useContext(UserContext);
    let channel = useContext(ChanelContext);

    useEffect(() => {
        setUserData(user);
        console.log(userData)

    },[userData])


    return (
        <div>
                <div>
                    {
                        userData.user && 
                        <div>   
                            <p><span>Name : </span>{userData.user.name}</p>
                            <p><span>Age : </span>{userData.user.age}</p>
                        </div>
                    }
                </div> 
        </div>
    )
}

export default UseContext
