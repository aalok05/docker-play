import React, {useEffect, useState} from 'react'

function UseEffect() {

    let [title,setTitle] = useState(0);
    let [name,setName] = useState('');

     /* call only when component mounts */
    useEffect(() => {
        console.log("COMPONENT MOUNT")
    },[])

    /* call only when title changes */
    useEffect(() => {
        console.log("CHANGE")
        document.title = title;
    },[title])

    return (
        <div>
            <input type="text" value={name} onChange = {(e) => setName(e.target.value)} />
            <button onClick = {() => setTitle(p => p+1)}>Set title</button>
        </div>
    )
}

export default UseEffect
