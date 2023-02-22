import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

const ViewBookContainer: React.FC = () => {
    return <div>view book container</div>
}

export default compose<React.ComponentType>(
    connect(null, null)
)(ViewBookContainer)