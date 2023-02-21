import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd'

const { RangePicker } = DatePicker
const { TextArea } = Input

const CreateBook: React.FC = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(data => console.log(data))

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
                    <Input {...register('title', { required: true })} />
                    {errors.title ? <p>title is required</p> : null}
                </Form.Item>

                <Form.Item label="description">
                    <TextArea rows={4} {...register("description", { required: true })} />
                    {errors.description ? <p>description is required</p> : null}
                </Form.Item>

                <Form.Item label="rating">
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.rating ? <p>rating is required</p> : null}
                </Form.Item>

                <Form.Item label="reviews_count">
                    <Controller
                        name="reviews_count"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.reviews_count ? <p>reviews_count is required</p> : null}
                </Form.Item>

                <Form.Item label="price">
                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.price ? <p>price is required</p> : null}
                </Form.Item>

                <Form.Item label='currency'>
                    <Select>
                        <Select.Option value='1'>BYN</Select.Option>
                    </Select>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default CreateBook