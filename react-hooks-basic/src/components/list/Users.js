import React from 'react';
import UserList from './UserList'

function Users() {

    let users = [
        {
            id:1,
            fn :  "Ram",
            ln:"Das",
            age : 22
        },
        {
            id:2,
            fn :  "Sam",
            ln:"Das",
            age : 28
        },
        {
            id:2,
            fn :  "Madhav",
            ln:"Das",
            age : 15
        }
    ]

    const displayUser = () => {
        return users.map((usr,index) => {
            return <div>
                <UserList user = {usr} key={index}/>
            </div>
        })
    }

    return (
        <div>
            {displayUser()}
        </div>
    )
}

export default Users
