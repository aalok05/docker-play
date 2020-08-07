import React,{useState} from 'react'

function UseState() {

    let[c1,setC1]=useState(0);
    let [arr, setArr] = useState([]);

   let setIncrementFive = e => {
       for(let i =0; i<5;i++){
        //    setC1(c1+1); will only add 1
              setC1(p => p+1);
       }
   }

   let updateArr = e => {
       let rand = (Math.random() + 2).toFixed(3);

       setArr(arr => [...arr,rand])
   }


    return (
        <div>
            <button onClick={setIncrementFive}>SetPrevState</button>
            <span>{c1}</span>
            <hr/>
            <button onClick={updateArr}>Update Array</button>
            <div>   
                <ol>
                    {
                        arr.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default UseState
