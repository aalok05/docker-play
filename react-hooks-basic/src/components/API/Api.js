import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Api() {


    useEffect(() => {
        getData()
    }, []);

    let [data, setData] = useState([])

    const getData = async () => {
        const result = await axios.get('https://hn.algolia.com/api/v1/search?query=redux');
        setData(result.data.hits);
        console.log(data)

    }

    return (
        <div>
            <div>
                <h3>{
                    data.map(item => (
                        <div>
                            <div>Title : {item.title}</div>
                            <div>URL : {item.url}</div>
                            <br />
                        </div>
                    ))
                }</h3>
            </div>
        </div>
    )
}

export default Api
