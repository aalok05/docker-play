import React, { Fragment } from 'react'
import useForm from '../useForm'
import validateRegister from './validateRegister'

const Register = () => {

    const registerSchema = {
        email: "",
        password: ""
    }

    let { handleChange, handleSubmit, values, errors } = useForm(submit, registerSchema, validateRegister);

    function submit() {
        console.log("SUBMIT ", values)
    }

    return (
        <Fragment>
            <div>
                <form noValidate onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <div>
                            <input type="email" name="email" value={values.email} onChange={handleChange} />
                            {
                                errors.email && <p>{errors.email}</p>
                            }
                        </div>
                    </div>

                    <div>
                        <label>Password</label>
                        <div>
                            <input type="password" name="password" value={values.password} onChange={handleChange} />
                        </div>
                        {
                            errors.password && <p>{errors.password}</p>
                        }
                    </div>
                    <div>
                        <input type="submit" value="SUBMIT" />
                    </div>
                </form>

            </div>
        </Fragment>
    )
}

export default Register
