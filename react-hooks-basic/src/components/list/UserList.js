import React from 'react'

function UserList(props) {
    let {fn,ln,age} = props.user
    return (
        <div>
            <ul>
                <li>{fn}</li>
                <li>{ln}</li>
                <li>{age}</li>
                <li>{age > 20 ? 'Can enter' : 'Restricted'}</li>
            </ul>
        </div>
    )
}

export default UserList
