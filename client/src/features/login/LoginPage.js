import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"

import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from './loginSlice'

function LoginPage() {
    const dispatch = useDispatch()

    return (
        <h1>Login Page</h1>
    )
}

export default LoginPage