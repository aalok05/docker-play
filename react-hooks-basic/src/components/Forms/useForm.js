import React, { useState, useEffect } from 'react'

const useForm = (cb, schema, validate) => {

    let [values, setValues] = useState(schema);
    let [errors, setErrors] = useState({});
    let [isSubmit, setSubmit] = useState(false)

    const handleChange = e => {
        if (e) {
            let { name, value, checked, type } = e.target;
            if (type === 'checkbox') {
                console.log("values[name] ",values, name, values[name])
                if (!checked){
                    let checkbox = values[name];
                    let indx =  checkbox instanceof Array ? checkbox.findIndex(v => v == value) : -1
                    if(indx > -1){
                        checkbox.splice(indx,1);
                        checkbox = checkbox.length ==  0 ? [] : checkbox
                        console.log("splice ", checkbox)
                        setValues({ ...values, [name]: [...checkbox] })

                    }else{
                        setValues({ ...values, [name]: [] })
                    }
                }
                    setValues({ ...values, [name]: value });
                if (checked) {
                    let checkbox = values[name];

                    if(!(checkbox instanceof Array)){
                        checkbox = []
                    }
                    console.log("push checkbox ", checkbox)

                    let indx =   checkbox.findIndex(v => v == value)
                    console.log("push index ", indx)

                    if (indx == -1) {
                        checkbox.push(value);
                        console.log("push ", checkbox)

                        setValues({ ...values, [name]: [...values.skills,value] })
                    }
                    else{
                        setValues({ ...values,[name]: []})
                    }
                }
            }else{
                setValues({...values, [name]:value})
            }

            //     setValues({...values, [name]:checked})
            console.log(values)
        }
    }

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
            setErrors(validate(values))
            setSubmit(true)

        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            cb()
        }
    }, [errors])

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }

}

export default useForm
