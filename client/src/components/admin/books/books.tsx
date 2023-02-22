import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TBookData, TBook } from '../../../types/types'

const columns: ColumnsType<TBook> = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'description',
        dataIndex: 'description',
        /*sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },*/
    },
    {
        title: 'rating',
        dataIndex: 'rating',
    },
    {
        title: 'reviews_count',
        dataIndex: 'reviews_count',
    },
    {
        title: 'price',
        dataIndex: 'price',
    },
    {
        title: 'currency',
        dataIndex: 'currency',
    },
    {
        title: 'Actions',
        dataIndex: '',
        key: 'x',
        render: (data) => <>
            <Link style={{ marginRight: 8 }} to={`/admin/books/${data.id}/update`}>Update</Link>
            <Link to={`/admin/books/${data.id}/delete`}>Delete</Link>
        </>,
    },
]

const onChange: TableProps<TBook>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    books: TBookData,
}

const books: React.FC<TMapProps> = (props) => {
    return (
        <div>
            <Link to={'/admin/books/create'}>
                <Button type="primary" style={{ marginBottom: 16 }}>
                    Add a book
                </Button>
            </Link>

            {props.isLoaded ? <Table columns={columns} dataSource={props.books.data} onChange={onChange} /> : <SimpleLoader />}
        </div>
    )
}

export default books