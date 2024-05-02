import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-router'
import { selectLoggedInUser } from '../features/login/loginSlice'

const PrivateRoute = ({ Component }) => {
    const [ loggedIn, setLoggedIn ] = useState(false)
    
    const currentUser = useSelector(selectLoggedInUser)

    Object.keys(currentUser).length > 0 ? setLoggedIn(!loggedIn) : loggedIn

    return loggedIn ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;