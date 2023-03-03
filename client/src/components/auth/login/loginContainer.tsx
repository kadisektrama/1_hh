import React, {useState} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Login from './login'
import { TLogin } from '../../../types/types'
import { authApi } from '../../../api/auth-api'

const BookContainer: React.FC = () => {
    const [error, setError] = useState<boolean>(false)
    const navigate = useNavigate()

    const login = async (body: TLogin) => {
        const response = await authApi.authenticate(body)

        if (response.status === 200) {
            document.cookie = `token=${response.data.token}; path=/`
            navigate('/')
        } else {
            setError(true)
        }
    }

    return <Login
        login={login}
    />
}

export default compose<React.ComponentType>(
    connect(null, null)
)(BookContainer)