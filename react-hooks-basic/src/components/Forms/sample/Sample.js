import React, { Fragment, useState } from 'react'
import useForm from '../useForm'

const Checkbox = ({ type = "checkbox", name, checked = false, onChange, value }) => {
    // console.log("Checkbox: ", value);
  
    return (
      <input type={type} name={name}  onChange={onChange} value={value} />
    );
};

const sampleSchema = {
  name:'',
  skills : [
    
  ]
}


const Sample = () => {
    

    const [checkedItems, setCheckedItems] = useState({});
    let { handleChange, handleSubmit, values, errors } = useForm(submit, sampleSchema);

    function submit() {
      console.log("SUBMIT ", values)
  }

    // const handleChange = event => {
    //     setCheckedItems({
    //       ...checkedItems,
    //       [event.target.name]: event.target.checked
    //     });
    //     console.log("checkedItems: ", checkedItems);
    //   };
  
    const checkboxes = [
      {
        name: "skills",
        key: "checkBox1",
        label: "Check Box 1"
      },
      {
        name: "skills",
        key: "checkBox2",
        label: "Check Box 2"
      }
    ];

    return (
        <Fragment>
            <div>
                <form>
                    <div>
                        <lable>Skills</lable><span></span>
                        {
                           checkboxes.map((item,index) => (
                                <label key={item.key}>
                                    {item.key}
                                    <Checkbox name={item.name} value={item.key} onChange = {handleChange} checked={checkboxes[item.name]}/>
                                </label>
                            ))
                        }
                    </div>
                    <div>
                    <label>Name</label>
                        <div>
                            <input type="text" name="name" value={values.name} onChange={handleChange} />
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Sample