import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import CreateBook from './createBook'

const CreateBookContainer: React.FC = (props) => {
    return <CreateBook />
}

export default compose(
    connect(null, null)
)(CreateBookContainer)

