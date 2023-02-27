import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    Select,
    InputNumber,
} from 'antd'

import { TBook, TBookDataSingle } from '../../../../types/types'

const { TextArea } = Input

type TDispatchProps = {
    updateBook: (bookId: string, body: TBook) => void
}

type TMapProps = {
    bookId: string,
    isLoaded: boolean,
    book: TBookDataSingle
}

const Update: React.FC<TDispatchProps & TMapProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TBook>({
        defaultValues: { ...props.book.data }
    })

    const onSubmit = handleSubmit(data => {
        props.updateBook(props.bookId, data)
    })

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onSubmit}
                layout='horizontal'
                style={{ maxWidth: 600 }}
            >
                <Form.Item label='Title'>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 100 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.title && <p className="error">title is required</p>}
                </Form.Item>

                <Form.Item label="description">
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true, minLength: 10, maxLength: 200 }}
                        render={({ field }) => <TextArea rows={4} {...field} />}
                    />
                    {errors.description ? <p className="error">description is required</p> : null}
                </Form.Item>

                <Form.Item label="author">
                    <Controller
                        name="author"
                        control={control}
                        rules={{ required: true, minLength: 10, maxLength: 200 }}
                        render={({ field }) => <TextArea rows={4} {...field} />}
                    />
                    {errors.author ? <p className="error">author is required</p> : null}
                </Form.Item>

                <Form.Item label="rating">
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: true, min: 0, max: 5 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.rating ? <p className="error">rating is required</p> : null}
                </Form.Item>

                <Form.Item label="reviews_count">
                    <Controller
                        name="reviews_count"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.reviews_count ? <p className="error">reviews_count is required</p> : null}
                </Form.Item>

                <Form.Item label="price">
                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.price ? <p className="error">price is required</p> : null}
                </Form.Item>

                <Form.Item label='currency'>
                    <Controller
                        name="currency"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <Select {...field}>
                                <Select.Option value={1}>BYN</Select.Option>
                            </Select>
                        }
                    />

                    {errors.price ? <p className="error">currency is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Update