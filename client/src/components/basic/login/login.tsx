import React from 'react'

type TMapDispatchToProps = {
    login: () => void
}

const login: React.FC<TMapDispatchToProps> = (props) => {
    return (
        <div>login</div>
    )
}

export default login